# CreateDeploymentRequest

## Example Usage

```typescript
import { CreateDeploymentRequest } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentRequest = {
  requestBody: {
    files: [
      {
        file: "folder/file.js",
      },
    ],
    gitMetadata: {
      remoteUrl: "https://github.com/vercel/next.js",
      commitAuthorName: "kyliau",
      commitMessage:
        "add method to measure Interaction to Next Paint (INP) (#36490)",
      commitRef: "main",
      commitSha: "dc36199b2234c6586ebe05ec94078a895c707e29",
      dirty: true,
    },
    meta: {
      "foo": "bar",
    },
    name: "my-instant-deployment",
    project: "my-deployment-project",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `skipAutoDetectionConfirmation`                                                      | [models.SkipAutoDetectionConfirmation](../models/skipautodetectionconfirmation.md)   | :heavy_minus_sign:                                                                   | Allows to skip framework detection so the API would not fail to ask for confirmation |
| `forceNew`                                                                           | [models.ForceNew](../models/forcenew.md)                                             | :heavy_minus_sign:                                                                   | Forces a new deployment even if there is a previous similar deployment               |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team identifier to perform the request on behalf of.                             |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team slug to perform the request on behalf of.                                   |
| `requestBody`                                                                        | [models.CreateDeploymentRequestBody](../models/createdeploymentrequestbody.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |