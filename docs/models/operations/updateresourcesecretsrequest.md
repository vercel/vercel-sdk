# UpdateResourceSecretsRequest

## Example Usage

```typescript
import { UpdateResourceSecretsRequest } from "@vercel/sdk/models/operations/updateresourcesecrets.js";

let value: UpdateResourceSecretsRequest = {
  integrationConfigurationId: "<id>",
  integrationProductIdOrSlug: "<value>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `integrationConfigurationId`                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `integrationProductIdOrSlug`                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `resourceId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `requestBody`                                                                                              | [operations.UpdateResourceSecretsRequestBody](../../models/operations/updateresourcesecretsrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |