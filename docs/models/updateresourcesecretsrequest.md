# UpdateResourceSecretsRequest

## Example Usage

```typescript
import { UpdateResourceSecretsRequest } from "@vercel/sdk/models/updateresourcesecretsop.js";

let value: UpdateResourceSecretsRequest = {
  integrationConfigurationId: "<id>",
  integrationProductIdOrSlug: "<value>",
  resourceId: "<id>",
  requestBody: {
    secrets: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `integrationConfigurationId`                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `integrationProductIdOrSlug`                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `resourceId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [models.UpdateResourceSecretsRequestBody](../models/updateresourcesecretsrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |