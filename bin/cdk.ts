#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import * as cdk from 'aws-cdk-lib';
import { AppStage } from '../lib/app-stage';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();

const delivery = new PipelineStack(app, 'Api-DeliveryPipeline', {
  name: 'Api',
  env: {
    account: '309632359432',
    region: 'eu-central-1'
  }
});

delivery.pipeline.addStage(
  new AppStage(app, 'App', {
    env: {
      account: '309632359432',
    region: 'eu-central-1'
    },
  })
);
