# Rce

Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.

## Example Usage

```typescript
import { Rce } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Rce = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                         | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `action`                                                                                                                         | [models.PutFirewallConfigSecurityRequestRequestBodyCrsAction](../models/putfirewallconfigsecurityrequestrequestbodycrsaction.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |