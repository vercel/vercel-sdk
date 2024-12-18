# GetDeploymentGitSource6

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GetDeploymentGitSource6 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSource6 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://wretched-newsprint.com",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [models.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBody26Type](../models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody26type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `ref`                                                                                                                                                                              | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `sha`                                                                                                                                                                              | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `gitUrl`                                                                                                                                                                           | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |