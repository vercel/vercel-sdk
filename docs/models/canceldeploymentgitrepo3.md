# CancelDeploymentGitRepo3

## Example Usage

```typescript
import { CancelDeploymentGitRepo3 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitRepo3 = {
  owner: "<value>",
  repoUuid: "<id>",
  slug: "<value>",
  type: "bitbucket",
  workspaceUuid: "<id>",
  path: "/private/var",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "team",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `owner`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `repoUuid`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `slug`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [models.CancelDeploymentGitRepoDeploymentsResponseType](../models/canceldeploymentgitrepodeploymentsresponsetype.md)           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `workspaceUuid`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `path`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `defaultBranch`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `private`                                                                                                                      | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `ownerType`                                                                                                                    | [models.CancelDeploymentGitRepoDeploymentsResponseOwnerType](../models/canceldeploymentgitrepodeploymentsresponseownertype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |