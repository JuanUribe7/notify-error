# lambda-archetype

Congratulations, you have just created a Serverless "Breeds" application using the AWS Serverless Application Model (AWS SAM) for the `nodejs18.x` runtime, and options to bootstrap it with [**Powertools for AWS Lambda (TypeScript)**](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/) (Lambda Powertools) utilities for Logging, Tracing and Metrics.

Powertools for AWS Lambda (TypeScript) is a developer toolkit to implement Serverless best practices and increase developer velocity.

This is a modification for the initial lambda in typescript just improvement for the compensation model system.

## Archetype Architecture Style

![Arquetype Architectonic Style] (https://drive.usercontent.google.com/download?id=10LPXXw48im6jFXFsBslzvtOco69wA27V)

#+html: <p align="center"><img src="https://drive.usercontent.google.com/download?id=10LPXXw48im6jFXFsBslzvtOco69wA27V" /></p>


## Usage 

Please check this video for :

TDD : https://drive.google.com/drive/folders/1M2lkbmfWb1_yKUQ4AprWyzKxUkto5yN_?usp=drive_link 

Config Lambda with Azure Pipeline and SonarCloud : https://drive.google.com/drive/folders/193GrKJVAM3N4bIHtZXzqt4Trc9oxzKjg?usp=drive_link


## Powertools for AWS Lambda (TypeScript) features

Powertools for AWS Lambda (TypeScript) provides three core utilities:

* **[Tracer](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/tracer/)** - Utilities to trace Lambda function handlers, and both synchronous and asynchronous functions
* **[Logger](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/logger/)** - Structured logging made easier, and a middleware to enrich log items with key details of the Lambda context
* **[Metrics](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/metrics/)** - Custom Metrics created asynchronously via CloudWatch Embedded Metric Format (EMF)

Find the complete project's [documentation here](https://awslabs.github.io/aws-lambda-powertools-typescript).

### Installing Powertools for AWS Lambda (TypeScript)

You have 2 ways of consuming those utilities:

* NPM modules
* Lambda Layer

#### Lambda layers

The Powertools for AWS Lambda (TypeScript) utilities is packaged as a single [AWS Lambda Layer](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-concepts.html#gettingstarted-concepts-layer)

👉 [Installation guide for the **Powertools for AWS Lambda (TypeScript)** layer](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/#lambda-layer)

#### NPM modules

The Powertools for AWS Lambda (TypeScript) utilities follow a modular approach, similar to the official [AWS SDK v3 for JavaScript](https://github.com/aws/aws-sdk-js-v3).  

Each TypeScript utility is installed as standalone NPM package.

Install all three core utilities at once with this single command:

```shell
npm install @aws-lambda-powertools/logger @aws-lambda-powertools/tracer @aws-lambda-powertools/metrics
```

Or refer to the installation guide of each utility:

👉 [Installation guide for the **Tracer** utility](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/tracer#getting-started)

👉 [Installation guide for the **Logger** utility](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/logger#getting-started)

👉 [Installation guide for the **Metrics** utility](https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/metrics#getting-started)

### Powertools for AWS Lambda (TypeScript) Examples

* [CDK](https://github.com/awslabs/aws-lambda-powertools-typescript/tree/main/examples/cdk)
* [SAM](https://github.com/awslabs/aws-lambda-powertools-typescript/tree/main/examples/sam)


### Use the SAM CLI to build and test locally

Build your application with the `sam build` command.

```bash
lambda-archetype$ sam build
```

The SAM CLI installs dependencies defined in `src/package.json`, compiles TypeScript with esbuild, creates a deployment package, and saves it in the `.aws-sam/build` folder.

Test a single function by invoking it directly with a test event. An event is a JSON document that represents the input that the function receives from the event source. Test events are included in the `events` folder in this project.

Run functions locally and invoke them with the `sam local invoke` command.

```bash
lambda-archetype$ sam local invoke BreedsFunction --event events/event.json
```

The SAM CLI can also emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
lambda-archetype$ sam local start-api
lambda-archetype$ curl http://localhost:3000/breeds
```

The SAM CLI reads the application template to determine the API's routes and the functions that they invoke. The `Events` property on each function's definition includes the route and method for each path.

```yaml
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /breeds
            Method: get
```

### Add a resource to your application

The application template uses AWS Serverless Application Model (AWS SAM) to define application resources. AWS SAM is an extension of AWS CloudFormation with a simpler syntax for configuring common serverless application resources such as functions, triggers, and APIs. For resources not included in [the SAM specification](https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md), you can use standard [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) resource types.

### Fetch, tail, and filter Lambda function logs

To simplify troubleshooting, SAM CLI has a command called `sam logs`. `sam logs` lets you fetch logs generated by your deployed Lambda function from the command line. In addition to printing the logs on the terminal, this command has several nifty features to help you quickly find the bug.

`NOTE`: This command works for all AWS Lambda functions; not just the ones you deploy using SAM.

```bash
lambda-archetype$ sam logs -n BreedsFunction --stack-name lambda-archetype --tail
```

You can find more information and examples about filtering Lambda function logs in the [SAM CLI Documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-logging.html).

### Unit tests

Tests are defined in the `test` folder in this project.

```bash
lambda-archetype$ cd src
src$ npm install
src$ npm run test
```
With this result:

![Arquetype Architectonic Style] (https://drive.usercontent.google.com/download?id=1jfusNgXBdKWiOuLk89nXCc19ZteMhiVP)

#+html: <p align="center"><img src="https://drive.usercontent.google.com/download?id=1jfusNgXBdKWiOuLk89nXCc19ZteMhiVP" /></p>


## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

Next, you can use AWS Serverless Application Repository to deploy ready to use Apps that go beyond hello world samples and learn how authors developed their applications: [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/)


