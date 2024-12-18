# Eleven

Update a managed ruleset

## Example Usage

```typescript
import { Eleven } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: Eleven = {
  action: "managedRules.update",
  id: "owasp",
  value: {
    active: false,
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest11Action](../models/updatefirewallconfigrequestbodysecurityrequest11action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | [models.RequestBodyId](../models/requestbodyid.md)                                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | [models.UpdateFirewallConfigRequestBodySecurityRequest11Value](../models/updatefirewallconfigrequestbodysecurityrequest11value.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |