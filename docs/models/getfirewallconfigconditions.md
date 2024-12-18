# GetFirewallConfigConditions

## Example Usage

```typescript
import { GetFirewallConfigConditions } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigConditions = {
  type: "protocol",
  op: "nex",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                          | [models.GetFirewallConfigType](../models/getfirewallconfigtype.md)                                                              | :heavy_check_mark:                                                                                                              | [Parameter](https://vercel.com/docs/security/vercel-waf/rule-configuration#parameters) from the incoming traffic.               |
| `op`                                                                                                                            | [models.GetFirewallConfigOp](../models/getfirewallconfigop.md)                                                                  | :heavy_check_mark:                                                                                                              | [Operator](https://vercel.com/docs/security/vercel-waf/rule-configuration#operators) used to compare the parameter with a value |
| `neg`                                                                                                                           | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `key`                                                                                                                           | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `value`                                                                                                                         | *models.GetFirewallConfigValue*                                                                                                 | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |