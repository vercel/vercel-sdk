# Ips

## Example Usage

```typescript
import { Ips } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Ips = {
  hostname: "separate-electronics.org",
  ip: "e0c6:cdb2:bdfc:ffeb:ad02:2a7e:d8be:ecd1",
  action: "bypass",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `hostname`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `ip`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `notes`                                                                                                                          | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `action`                                                                                                                         | [models.PutFirewallConfigSecurityRequestRequestBodyIpsAction](../models/putfirewallconfigsecurityrequestrequestbodyipsaction.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |