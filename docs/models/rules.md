# Rules

## Example Usage

```typescript
import { Rules } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Rules = {
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "rate_limit_api_id",
          op: "re",
        },
      ],
    },
  ],
  action: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `active`                                                                                                                             | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `conditionGroup`                                                                                                                     | [models.ConditionGroup](../models/conditiongroup.md)[]                                                                               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `action`                                                                                                                             | [models.PutFirewallConfigSecurityRequestRequestBodyRulesAction](../models/putfirewallconfigsecurityrequestrequestbodyrulesaction.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |