# GetFirewallConfigRce

Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.

## Example Usage

```typescript
import { GetFirewallConfigRce } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRce = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                   | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `action`                                                                                                                                   | [models.GetFirewallConfigSecurityResponse200ApplicationJSONAction](../models/getfirewallconfigsecurityresponse200applicationjsonaction.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |