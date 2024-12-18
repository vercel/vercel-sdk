# PutFirewallConfigPhp

PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.

## Example Usage

```typescript
import { PutFirewallConfigPhp } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigPhp = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                             | *boolean*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `action`                                                                                                                                                                             | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsaction.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |