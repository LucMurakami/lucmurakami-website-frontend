#!/bin/bash

AWS_S3_REGION="us-west-2"
STAGING_BRANCH="master"
PRODUCTION_BRANCH="prod"

NODE_ENV=''
CLOUDFRONT_DIST_ID=''
if [[ $TRAVIS_BRANCH == $STAGING_BRANCH ]]; then
  NODE_ENV="staging"
  CLOUDFRONT_DIST_ID=$CLOUDFRONT_DIST_ID_STAGING
  S3_BUCKET="lucmurakami-website-$NODE_ENV"
  yarn build:staging
elif [[ $TRAVIS_BRANCH == $PRODUCTION_BRANCH ]]; then
  NODE_ENV="production"
  CLOUDFRONT_DIST_ID=$CLOUDFRONT_DIST_ID_PRODUCTION
  S3_BUCKET="lucmurakami.ca"
  yarn build:production
else
  echo "Not deploying"
  exit
fi

echo "Deploying to the $S3_BUCKET bucket"

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set default.region us-west-2

aws s3 sync build/ "s3://$S3_BUCKET" --acl public-read --delete

aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DIST_ID --paths /*
