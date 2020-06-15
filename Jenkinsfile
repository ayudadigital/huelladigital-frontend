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
def buildAndPublishDockerImages(String nextReleaseNumber='') {
    if (nextReleaseNumber == '') {
        nextReleaseNumber = sh (script: 'kd get-next-release-number .', returnStdout: true).trim().substring(1)
    }
    // Frontend
    docker.withRegistry('', 'docker-token') {
        def customImage = docker.build("${env.DOCKER_ORGANIZATION}/${cfg.projectName}-frontend:${nextReleaseNumber}", "--pull --no-cache --build-arg BUILD_ID=$BUILD_ID frontend")
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
            when { branch 'develop' }
            steps {
                buildAndPublishDockerImages('beta')
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
