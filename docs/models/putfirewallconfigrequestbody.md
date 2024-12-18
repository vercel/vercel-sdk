# PutFirewallConfigRequestBody

## Example Usage

```typescript
import { PutFirewallConfigRequestBody } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRequestBody = {
  firewallEnabled: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `firewallEnabled`                                | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `managedRules`                                   | [models.ManagedRules](../models/managedrules.md) | :heavy_minus_sign:                               | N/A                                              |
| `crs`                                            | [models.Crs](../models/crs.md)                   | :heavy_minus_sign:                               | Custom Ruleset                                   |
| `rules`                                          | [models.Rules](../models/rules.md)[]             | :heavy_minus_sign:                               | N/A                                              |
| `ips`                                            | [models.Ips](../models/ips.md)[]                 | :heavy_minus_sign:                               | N/A                                              |