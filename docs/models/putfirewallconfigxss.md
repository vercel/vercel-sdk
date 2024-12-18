# PutFirewallConfigXss

XSS Attack - Prevent injection of malicious scripts into trusted webpages.

## Example Usage

```typescript
import { PutFirewallConfigXss } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigXss = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `action`                                                                                                                                                                                   | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsXssAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsxssaction.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |