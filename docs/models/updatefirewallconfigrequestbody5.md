# UpdateFirewallConfigRequestBody5

Reorder a custom rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody5 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
  value: 1928.81,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest5Action](../models/updatefirewallconfigrequestbodysecurityrequest5action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |