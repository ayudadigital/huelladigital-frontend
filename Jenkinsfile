#!groovy

@Library('github.com/ayudadigital/jenkins-pipeline-library@v5.0.0') _

// Initialize global config
cfg = jplConfig('huelladigital-frontend', 'react', '', [email: env.CI_NOTIFY_EMAIL_TARGETS])

// Disable commit message validation
cfg.commitValidation.enabled = false

/**
 * Build and publish docker images
 *
 * @param nextReleaseNumber String Release number to be used as tag
 */
def buildAndPublishDockerImages(String nextReleaseNumber='', String baseUrl) {
    if (nextReleaseNumber == '') {
        nextReleaseNumber = sh (script: 'kd get-next-release-number .', returnStdout: true).trim().substring(1)
    }
    // Frontend
    docker.withRegistry('', 'docker-token') {
        def customImage = docker.build("${env.DOCKER_ORGANIZATION}/huelladigital-frontend:${nextReleaseNumber}", "--pull --no-cache --build-arg BUILD_ID=$BUILD_ID --build-arg BASE_URL=${baseUrl} frontend")
        sh "docker image prune --filter label=stage=builder --filter label=build=$BUILD_ID"
        customImage.push()
        if (nextReleaseNumber != 'beta') {
            customImage.push('latest')
        }
    }
}

pipeline {
    agent none

    stages {
        stage ('Initialize') {
            agent { label 'docker' }
            steps {
                jplStart(cfg)
            }
        }
        stage ('Install') {
            agent { label "docker" }
            steps {
                sh "bin/devcontrol.sh frontend install"
            }
        }
        stage ('Test') {
            agent { label "docker" }
            steps {
                sh "bin/devcontrol.sh frontend test"
            }
        }
        stage ('Build') {
            agent { label "docker" }
            steps {
                sh "bin/devcontrol.sh frontend build"
            }
        }
        stage("Docker Publish") {
            agent { label 'docker' }
//            when { branch 'develop' }
            steps {
                script {
                    env.DOCKER_TAG = "${GIT_COMMIT}"
                }
                sh "echo \"Building tag: ${env.DOCKER_TAG}\""
                buildAndPublishDockerImages("${env.DOCKER_TAG}", "https://dev.huellapositiva.ayudadigital.org")
//                buildAndPublishDockerImages("beta", "https://dev.huelladigital.ayudadigital.org")
            }
        }
        stage("Remote deploy") {
            agent { label 'docker' }
            when { branch 'develop' }
            steps {
                sshagent (credentials: ['jpl-ssh-credentials']) {
                    sh "bin/deploy.sh dev"
                }
            }
        }
        stage("AWS deploy") {
            agent {
                dockerfile {
                    filename 'Dockerfile'
                    dir 'frontend/docker/build/aws'
                }
            }
//            when { branch 'develop' }
            steps {
                withCredentials([usernamePassword(credentialsId: 'aws-huellapositiva', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    sh """
                        echo 'Deploying to AWS -> Docker tag: ${env.DOCKER_TAG}'
                        echo '======================================================='
                        export AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY
                        bin/deploy-aws.sh dev ${env.DOCKER_TAG}
                    """
                }
            }
        }
        // Close release
        stage ('Make release') {
            agent { label 'docker' }
            when { branch 'release/new' }
            steps {
                buildAndPublishDockerImages()
                jplMakeRelease(cfg, true)
            }
        }
    }

    post {
        always {
            jplPostBuild(cfg)
        }
    }

    options {
        timestamps()
        ansiColor('xterm')
        buildDiscarder(logRotator(artifactNumToKeepStr: '20',artifactDaysToKeepStr: '30'))
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
    }
}
