# CancelDeploymentGitSource1

## Example Usage

```typescript
import { CancelDeploymentGitSource1 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitSource1 = {
  type: "github",
  repoId: 1220.86,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [models.CancelDeploymentGitSourceType](../models/canceldeploymentgitsourcetype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `repoId`                                                                           | *models.CancelDeploymentGitSourceRepoId*                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ref`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `sha`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `prId`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |