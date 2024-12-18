# UpdateFirewallConfigRequestBodySecurityRequestValue

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequestValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequestValue = {
  hostname: "yummy-department.info",
  ip: "92.25.92.227",
  action: "challenge",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `hostname`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `ip`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `notes`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `action`                                                                                                                                     | [models.UpdateFirewallConfigRequestBodySecurityRequest8ValueAction](../models/updatefirewallconfigrequestbodysecurityrequest8valueaction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |