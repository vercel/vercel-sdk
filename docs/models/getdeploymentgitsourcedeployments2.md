# GetDeploymentGitSourceDeployments2

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments2 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSourceDeployments2 = {
  type: "github",
  org: "<value>",
  repo: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [models.GetDeploymentGitSourceType](../models/getdeploymentgitsourcetype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `org`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `repo`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `ref`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `sha`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `prId`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |