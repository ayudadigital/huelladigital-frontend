#!/bin/bash

env=$1
TASK_DEFINITION=$2
DOCKER_TAG=$3

DOCKER_IMAGE=ayudadigital/huelladigital-frontend:${DOCKER_TAG}
CLUSTER_NAME=default
TASK_FAMILY=frontend-task
SERVICE_NAME=frontend-task

echo ${TASK_DEFINITION}
echo ${TASK_DEFINITION} | jq --arg DOCKER_IMAGE "$DOCKER_IMAGE" '.containerDefinitions[0].image = $DOCKER_IMAGE' .
echo ${TASK_DEFINITION} | jq --arg DOCKER_IMAGE "$DOCKER_IMAGE" '.containerDefinitions[0].image = $DOCKER_IMAGE' > /tmp/new_frontend_task_definition.json
NEW_TASK_DEFINITION=$(aws ecs register-task-definition --family ${TASK_FAMILY} --region us-east-1 --cli-input-json file:///tmp/new_frontend_task_definition.json)
echo "======================================"
echo "New task definition:"
echo "$NEW_TASK_DEFINITION"
echo ""
NEW_TASK_VERSION=$(echo ${NEW_TASK_DEFINITION} | jq --raw-output '.taskDefinition.revision')
echo "New task version: ${NEW_TASK_VERSION}"
echo ""
echo "======================================"
echo "Updating service with new task definition:"
NEW_SERVICE_DEFINITION=$(aws ecs update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --task-definition $TASK_FAMILY:$NEW_TASK_VERSION --region us-east-1)
echo "New service:"
echo $NEW_SERVICE_DEFINITION
echo ""
