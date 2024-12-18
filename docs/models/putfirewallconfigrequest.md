# PutFirewallConfigRequest

## Example Usage

```typescript
import { PutFirewallConfigRequest } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRequest = {
  projectId: "<id>",
  requestBody: {
    firewallEnabled: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The Team identifier to perform the request on behalf of.                         |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               |
| `requestBody`                                                                    | [models.PutFirewallConfigRequestBody](../models/putfirewallconfigrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |