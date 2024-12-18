# PutFirewallConfigSf

Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.

## Example Usage

```typescript
import { PutFirewallConfigSf } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSf = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `action`                                                                                                                                                                                 | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsSfAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrssfaction.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |