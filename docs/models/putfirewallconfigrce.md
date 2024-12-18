# PutFirewallConfigRce

Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.

## Example Usage

```typescript
import { PutFirewallConfigRce } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRce = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `action`                                                                                                                                                                       | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactiveaction.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |