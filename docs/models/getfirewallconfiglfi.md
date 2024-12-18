# GetFirewallConfigLfi

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

## Example Usage

```typescript
import { GetFirewallConfigLfi } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigLfi = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `active`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `action`                                                                                               | [models.GetFirewallConfigSecurityResponseAction](../models/getfirewallconfigsecurityresponseaction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |