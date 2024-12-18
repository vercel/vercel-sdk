# RequestBody6

Enable a managed rule

## Example Usage

```typescript
import { RequestBody6 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody6 = {
  action: "crs.update",
  id: "sd",
  value: {
    active: false,
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest6Action](../models/updatefirewallconfigrequestbodysecurityrequest6action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | [models.Id](../models/id.md)                                                                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodySecurityValue](../models/updatefirewallconfigrequestbodysecurityvalue.md)                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |