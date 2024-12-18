# Lfi

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

## Example Usage

```typescript
import { Lfi } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Lfi = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `active`                                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `action`                                                                                             | [models.PutFirewallConfigSecurityRequestAction](../models/putfirewallconfigsecurityrequestaction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |