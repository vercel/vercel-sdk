# GetFirewallConfigSf

Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.

## Example Usage

```typescript
import { GetFirewallConfigSf } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigSf = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                     | *boolean*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `action`                                                                                                                                                                     | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrssfaction.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |