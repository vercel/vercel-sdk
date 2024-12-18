# Four

## Example Usage

```typescript
import { Four } from "@vercel/sdk/models/createdeploymentop.js";

let value: Four = {
  ref: "<value>",
  repoUuid: "<id>",
  type: "bitbucket",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ref`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `repoUuid`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sha`                                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [models.CreateDeploymentGitSourceDeploymentsType](../models/createdeploymentgitsourcedeploymentstype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `workspaceUuid`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |