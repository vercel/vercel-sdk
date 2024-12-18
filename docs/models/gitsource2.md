# GitSource2

## Example Usage

```typescript
import { GitSource2 } from "@vercel/sdk/models/createdeploymentop.js";

let value: GitSource2 = {
  org: "<value>",
  ref: "<value>",
  repo: "<value>",
  type: "github",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `org`                                              | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `ref`                                              | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `repo`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `sha`                                              | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `type`                                             | [models.GitSourceType](../models/gitsourcetype.md) | :heavy_check_mark:                                 | N/A                                                |