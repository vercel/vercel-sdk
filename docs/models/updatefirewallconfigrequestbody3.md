# UpdateFirewallConfigRequestBody3

Update a custom rule

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBody3 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "method",
            op: "sub",
          },
        ],
      },
    ],
    action: {},
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityAction](../models/updatefirewallconfigrequestbodysecurityaction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | [models.UpdateFirewallConfigRequestBodyValue](../models/updatefirewallconfigrequestbodyvalue.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |