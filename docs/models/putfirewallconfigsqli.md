# PutFirewallConfigSqli

SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.

## Example Usage

```typescript
import { PutFirewallConfigSqli } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigSqli = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                     | *boolean*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `action`                                                                                                                                                                                     | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsSqliAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrssqliaction.md) | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |