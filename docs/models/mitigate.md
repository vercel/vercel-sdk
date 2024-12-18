# Mitigate

## Example Usage

```typescript
import { Mitigate } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Mitigate = {
  action: "deny",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                         | [models.PutFirewallConfigSecurityRequestRequestBodyRulesActionAction](../models/putfirewallconfigsecurityrequestrequestbodyrulesactionaction.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `rateLimit`                                                                                                                                      | *models.RateLimit*                                                                                                                               | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `redirect`                                                                                                                                       | *models.Redirect*                                                                                                                                | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `actionDuration`                                                                                                                                 | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |