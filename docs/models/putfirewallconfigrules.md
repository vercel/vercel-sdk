# PutFirewallConfigRules

## Example Usage

```typescript
import { PutFirewallConfigRules } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRules = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "scheme",
          op: "gt",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `active`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `conditionGroup`                                                                                       | [models.PutFirewallConfigConditionGroup](../models/putfirewallconfigconditiongroup.md)[]               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `action`                                                                                               | [models.PutFirewallConfigSecurityResponseAction](../models/putfirewallconfigsecurityresponseaction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |