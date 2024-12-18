# Three

## Example Usage

```typescript
import { Three } from "@vercel/sdk/models/createdeploymentop.js";

let value: Three = {
  projectId: "<id>",
  ref: "<value>",
  type: "gitlab",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectId`                                                                        | *models.ProjectId*                                                                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ref`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sha`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.CreateDeploymentGitSourceType](../models/createdeploymentgitsourcetype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |