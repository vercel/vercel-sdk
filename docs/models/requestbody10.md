# RequestBody10

Remove an IP Blocking rule

## Example Usage

```typescript
import { RequestBody10 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody10 = {
  action: "ip.remove",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                             | [models.UpdateFirewallConfigRequestBodySecurityRequest10Action](../models/updatefirewallconfigrequestbodysecurityrequest10action.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | *any*                                                                                                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |