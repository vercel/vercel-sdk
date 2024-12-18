# GitSource6

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GitSource6 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: GitSource6 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://close-airman.org",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [models.CancelDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBodyType](../models/canceldeploymentgitsourcedeploymentsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `ref`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `sha`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `gitUrl`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |