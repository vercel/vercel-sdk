# Ma

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

## Example Usage

```typescript
import { Ma } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Ma = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `active`                                                                               | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `action`                                                                               | [models.PutFirewallConfigSecurityAction](../models/putfirewallconfigsecurityaction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |