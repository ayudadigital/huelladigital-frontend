FROM amazon/aws-cli

RUN yum install jq -y

COPY deploy-aws.sh /deploy-aws.sh

ENTRYPOINT ["/deploy-aws.sh"]
