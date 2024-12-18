# UpdateFirewallConfigRequestBodyValue

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodyValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodyValue = {
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "target_path",
          op: "inc",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `active`                                                                                                                           | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `conditionGroup`                                                                                                                   | [models.UpdateFirewallConfigRequestBodyConditionGroup](../models/updatefirewallconfigrequestbodyconditiongroup.md)[]               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest3Action](../models/updatefirewallconfigrequestbodysecurityrequest3action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |