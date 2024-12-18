# GetDeploymentGitSourceDeployments4

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments4 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSourceDeployments4 = {
  type: "bitbucket",
  repoUuid: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [models.GetDeploymentGitSourceDeploymentsResponseType](../models/getdeploymentgitsourcedeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `workspaceUuid`                                                                                                    | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `repoUuid`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `ref`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `sha`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `prId`                                                                                                             | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |