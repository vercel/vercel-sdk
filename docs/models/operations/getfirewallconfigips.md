# GetFirewallConfigIps

## Example Usage

```typescript
import { GetFirewallConfigIps } from "@vercel/sdk/models/operations/getfirewallconfig.js";

let value: GetFirewallConfigIps = {
  id: "<id>",
  hostname: "tiny-independence.info",
  ip: "4c14:decd:faac:2fb3:f7dd:b2c7:fdc7:afba",
  action: "deny",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `hostname`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ip`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `notes`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `action`                                                                                                 | [operations.GetFirewallConfigSecurityAction](../../models/operations/getfirewallconfigsecurityaction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |