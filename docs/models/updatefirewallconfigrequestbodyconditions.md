# UpdateFirewallConfigRequestBodyConditions

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodyConditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodyConditions = {
  type: "rate_limit_api_id",
  op: "nex",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                          | [models.UpdateFirewallConfigRequestBodySecurityType](../models/updatefirewallconfigrequestbodysecuritytype.md)                  | :heavy_check_mark:                                                                                                              | [Parameter](https://vercel.com/docs/security/vercel-waf/rule-configuration#parameters) from the incoming traffic.               |
| `op`                                                                                                                            | [models.UpdateFirewallConfigRequestBodyOp](../models/updatefirewallconfigrequestbodyop.md)                                      | :heavy_check_mark:                                                                                                              | [Operator](https://vercel.com/docs/security/vercel-waf/rule-configuration#operators) used to compare the parameter with a value |
| `neg`                                                                                                                           | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `key`                                                                                                                           | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `value`                                                                                                                         | *models.UpdateFirewallConfigRequestBodySecurityRequest3Value*                                                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |