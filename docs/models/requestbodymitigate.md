# RequestBodyMitigate

## Example Usage

```typescript
import { RequestBodyMitigate } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBodyMitigate = {
  action: "challenge",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                     | [models.UpdateFirewallConfigRequestBodySecurityRequest2ValueAction](../models/updatefirewallconfigrequestbodysecurityrequest2valueaction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `rateLimit`                                                                                                                                  | *models.RequestBodyRateLimit*                                                                                                                | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `redirect`                                                                                                                                   | *models.RequestBodyRedirect*                                                                                                                 | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `actionDuration`                                                                                                                             | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |