# GetProjectsMitigate

## Example Usage

```typescript
import { GetProjectsMitigate } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsMitigate = {
  action: "redirect",
  ruleId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `action`                                                   | [models.GetProjectsAction](../models/getprojectsaction.md) | :heavy_check_mark:                                         | N/A                                                        |
| `ruleId`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `ttl`                                                      | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `erl`                                                      | [models.GetProjectsErl](../models/getprojectserl.md)       | :heavy_minus_sign:                                         | N/A                                                        |