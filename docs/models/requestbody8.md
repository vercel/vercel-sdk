# RequestBody8

Add an IP Blocking rule

## Example Usage

```typescript
import { RequestBody8 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "honorable-unblinking.net",
    ip: "b2a2:5378:e5ab:ba6a:449a:bdc0:cdf0:b41c",
    action: "bypass",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest8Action](../models/updatefirewallconfigrequestbodysecurityrequest8action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityRequestValue](../models/updatefirewallconfigrequestbodysecurityrequestvalue.md)     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |