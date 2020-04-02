#!/bin/bash

set -x
set -e

IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
  \"AuthRoleName\": \"amplify-covid-19-website-dev-163103-authRole\",\
  \"UnauthRoleArn\": \"arn:aws:iam::954225943395:role/amplify-covid-19-website-dev-163103-unauthRole\",\
  \"AuthRoleArn\": \"arn:aws:iam::954225943395:role/amplify-covid-19-website-dev-163103-authRole\",\
  \"Region\": \"eu-west-2\",\
  \"DeploymentBucketName\": \"amplify-covid-19-website-dev-163103-deployment\",\
  \"UnauthRoleName\": \"amplify-covid-19-website-dev-163103-unauthRole\",\
  \"StackName\": \"amplify-covid-19-website-dev-163103\",\
  \"StackId\": \"arn:aws:cloudformation:eu-west-2:954225943395:stack/amplify-covid-19-website-dev-163103/289a6600-74a3-11ea-9701-0617023ccf6e\",\
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