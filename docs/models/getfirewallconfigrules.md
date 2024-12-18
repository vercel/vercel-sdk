# GetFirewallConfigRules

## Example Usage

```typescript
import { GetFirewallConfigRules } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRules = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "scheme",
          op: "eq",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `active`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `conditionGroup`                                                                         | [models.GetFirewallConfigConditionGroup](../models/getfirewallconfigconditiongroup.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `action`                                                                                 | [models.GetFirewallConfigAction](../models/getfirewallconfigaction.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |