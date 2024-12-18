# GetDeploymentGitRepo2

## Example Usage

```typescript
import { GetDeploymentGitRepo2 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitRepo2 = {
  org: "<value>",
  repo: "<value>",
  repoId: 411.80,
  type: "github",
  repoOwnerId: 8164.21,
  path: "/usr/local/src",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "team",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `org`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repo`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repoId`                                                                                                                 | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | [models.GetDeploymentGitRepoType](../models/getdeploymentgitrepotype.md)                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repoOwnerId`                                                                                                            | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `path`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `defaultBranch`                                                                                                          | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `private`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ownerType`                                                                                                              | [models.GetDeploymentGitRepoDeploymentsResponseOwnerType](../models/getdeploymentgitrepodeploymentsresponseownertype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |