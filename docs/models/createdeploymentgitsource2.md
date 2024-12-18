# CreateDeploymentGitSource2

## Example Usage

```typescript
import { CreateDeploymentGitSource2 } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentGitSource2 = {
  type: "github",
  org: "<value>",
  repo: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [models.CreateDeploymentGitSourceDeploymentsResponse200Type](../models/createdeploymentgitsourcedeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `org`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `repo`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `ref`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `sha`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `prId`                                                                                                                         | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |