# CancelDeploymentGitSource3

## Example Usage

```typescript
import { CancelDeploymentGitSource3 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitSource3 = {
  type: "gitlab",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.CancelDeploymentGitSourceDeploymentsResponseType](../models/canceldeploymentgitsourcedeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `projectId`                                                                                                              | *models.CancelDeploymentGitSourceProjectId*                                                                              | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ref`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `sha`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `prId`                                                                                                                   | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |