# Sqli

SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.

## Example Usage

```typescript
import { Sqli } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Sqli = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `action`                                                                                                                                 | [models.PutFirewallConfigSecurityRequestRequestBodyCrsSqliAction](../models/putfirewallconfigsecurityrequestrequestbodycrssqliaction.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |