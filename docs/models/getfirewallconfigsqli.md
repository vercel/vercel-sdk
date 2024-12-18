# GetFirewallConfigSqli

SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.

## Example Usage

```typescript
import { GetFirewallConfigSqli } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigSqli = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                         | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `action`                                                                                                                                                                         | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrssqliaction.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |