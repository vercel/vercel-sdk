# PutFirewallConfigMa

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

## Example Usage

```typescript
import { PutFirewallConfigMa } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigMa = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `action`                                                                                                                                                                                 | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsMaAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsmaaction.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |