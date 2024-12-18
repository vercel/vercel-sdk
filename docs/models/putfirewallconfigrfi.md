# PutFirewallConfigRfi

Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.

## Example Usage

```typescript
import { PutFirewallConfigRfi } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRfi = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                           | *boolean*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `action`                                                                                                                                                           | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyaction.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |