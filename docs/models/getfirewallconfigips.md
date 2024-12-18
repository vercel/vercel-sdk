# GetFirewallConfigIps

## Example Usage

```typescript
import { GetFirewallConfigIps } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigIps = {
  id: "<id>",
  hostname: "beloved-hyphenation.biz",
  ip: "200.183.37.161",
  action: "bypass",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hostname`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ip`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `notes`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `action`                                                                               | [models.GetFirewallConfigSecurityAction](../models/getfirewallconfigsecurityaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |