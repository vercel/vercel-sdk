# Conditions

## Example Usage

```typescript
import { Conditions } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Conditions = {
  type: "cookie",
  op: "ex",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [models.PutFirewallConfigType](../models/putfirewallconfigtype.md)                                                               | :heavy_check_mark:                                                                                                               | [Parameter](https://vercel.com/docs/security/vercel-waf/rule-configuration#parameters) from the incoming traffic.                |
| `op`                                                                                                                             | [models.Op](../models/op.md)                                                                                                     | :heavy_check_mark:                                                                                                               | [Operator](https://vercel.com/docs/security/vercel-waf/rule-configuration#operators) used to compare the parameter with a value. |
| `neg`                                                                                                                            | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `key`                                                                                                                            | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | *models.PutFirewallConfigValue*                                                                                                  | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |