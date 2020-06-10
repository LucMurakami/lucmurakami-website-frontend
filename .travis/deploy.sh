#!/bin/bash

AWS_S3_REGION="us-west-2"
STAGING_BRANCH="master"
PRODUCTION_BRANCH="prod"

NODE_ENV=''
CLOUDFRONT_DIST_ID=''
if [[ $TRAVIS_BRANCH == $STAGING_BRANCH ]]; then
  NODE_ENV="staging"
  CLOUDFRONT_DIST_ID=$CLOUDFRONT_DIST_ID_STAGING
  yarn build:staging
elif [[ $TRAVIS_BRANCH == $PRODUCTION_BRANCH ]]; then
  NODE_ENV="production"
  CLOUDFRONT_DIST_ID=$CLOUDFRONT_DIST_ID_PRODUCTION
  yarn build:production
else
  echo "Not deploying"
  exit
fi

S3_BUCKET="lucmurakami-website-$NODE_ENV"
echo "Deploying to the $S3_BUCKET bucket"

pip install awscli --upgrade --user

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set default.region us-west-2

aws s3 sync public/ "s3://$S3_BUCKET" --acl public-read --delete

aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DIST_ID --paths /*
