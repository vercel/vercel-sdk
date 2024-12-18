# UpdateFirewallConfigRateLimitSecurity1

## Example Usage

```typescript
import { UpdateFirewallConfigRateLimitSecurity1 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRateLimitSecurity1 = {
  algo: "token_bucket",
  window: 9504.86,
  limit: 351.07,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `algo`                                                                                     | [models.UpdateFirewallConfigRateLimitAlgo](../models/updatefirewallconfigratelimitalgo.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `window`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `keys`                                                                                     | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `action`                                                                                   | *models.UpdateFirewallConfigRateLimitSecurityAction*                                       | :heavy_minus_sign:                                                                         | N/A                                                                                        |