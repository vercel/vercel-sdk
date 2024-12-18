# PutFirewallConfigSd

Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.

## Example Usage

```typescript
import { PutFirewallConfigSd } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSd = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `action`                                                                                                                                                                                 | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsSdAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrssdaction.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |