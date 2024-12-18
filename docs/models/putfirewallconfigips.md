# PutFirewallConfigIps

## Example Usage

```typescript
import { PutFirewallConfigIps } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigIps = {
  id: "<id>",
  hostname: "mindless-certification.net",
  ip: "246.72.67.85",
  action: "challenge",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `hostname`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `ip`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `notes`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `action`                                                                                                     | [models.PutFirewallConfigSecurityResponse200Action](../models/putfirewallconfigsecurityresponse200action.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |