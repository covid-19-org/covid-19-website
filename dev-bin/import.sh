#!/bin/bash

set -x
set -e

IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
  \"AuthRoleName\": \"covid-19-website-develop-20200402073645-authRole\",\
  \"UnauthRoleArn\": \"arn:aws:iam::954225943395:role/covid-19-website-develop-20200402073645-unauthRole\",\
  \"AuthRoleArn\": \"arn:aws:iam::954225943395:role/covid-19-website-develop-20200402073645-authRole\",\
  \"Region\": \"eu-west-2\",\
  \"DeploymentBucketName\": \"covid-19-website-develop-20200402073645-deployment\",\
  \"UnauthRoleName\": \"covid-19-website-develop-20200402073645-unauthRole\",\
  \"StackName\": \"covid-19-website-develop-20200402073645\",\
  \"StackId\": \"arn:aws:cloudformation:eu-west-2:954225943395:stack/covid-19-website-develop-20200402073645/b46e3c40-74b4-11ea-8f3c-069b836e2b40\",\
  \"AmplifyAppId\": \"du43hqzd9ye4n\"\
}"

PROVIDER_CONFIG="{\
  \"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"


AWS_CONFIG="{\
  \"configLevel\":\"project\",\
  \"useProfile\":true,\
  \"profileName\":\"amplify\"\
}"

amplify env import \
--name develop \
--config $PROVIDER_CONFIG \
--awsInfo $AWS_CONFIG