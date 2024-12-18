# UpdateFirewallConfigRequest

## Example Usage

```typescript
import { UpdateFirewallConfigRequest } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequest = {
  projectId: "<id>",
  requestBody: {
    action: "managedRules.update",
    id: "owasp",
    value: {
      active: false,
    },
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |
| `requestBody`                                            | *models.UpdateFirewallConfigRequestBody*                 | :heavy_check_mark:                                       | N/A                                                      |