# PutFirewallConfigGen

Generic Attack - Provide broad protection from various undefined or novel attack vectors.

## Example Usage

```typescript
import { PutFirewallConfigGen } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigGen = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `action`                                                                                                                                                                                   | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsGenAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsgenaction.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |