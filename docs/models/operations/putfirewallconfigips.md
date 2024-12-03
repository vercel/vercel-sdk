# PutFirewallConfigIps

## Example Usage

```typescript
import { PutFirewallConfigIps } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: PutFirewallConfigIps = {
  id: "<id>",
  hostname: "tender-hawk.info",
  ip: "e1b7:f0df:6fce:0c6c:db2b:dfcf:feba:d022",
  action: "bypass",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `hostname`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `ip`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `notes`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `action`                                                                                                                       | [operations.PutFirewallConfigSecurityResponse200Action](../../models/operations/putfirewallconfigsecurityresponse200action.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |