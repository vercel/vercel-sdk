# Created2

## Example Usage

```typescript
import { Created2 } from "@vercel/sdk/models/createprojectenvop.js";

let value: Created2 = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `target`                                                                                                     | *models.CreateProjectEnvCreatedTarget*                                                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [models.CreateProjectEnvCreatedType](../models/createprojectenvcreatedtype.md)                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `sunsetSecretId`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | This is used to identiy variables that have been migrated from type secret to sensitive.                     |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `key`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `value`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `configurationId`                                                                                            | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `updatedBy`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `gitBranch`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `edgeConfigId`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `edgeConfigTokenId`                                                                                          | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `contentHint`                                                                                                | *models.CreateProjectEnvCreatedContentHint*                                                                  | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `internalContentHint`                                                                                        | [models.CreateProjectEnvCreatedInternalContentHint](../models/createprojectenvcreatedinternalcontenthint.md) | :heavy_minus_sign:                                                                                           | Similar to `contentHints`, but should not be exposed to the user.                                            |
| `decrypted`                                                                                                  | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether `value` and `vsmValue` are decrypted.                                                                |
| `comment`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `customEnvironmentIds`                                                                                       | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `vsmValue`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `system`                                                                                                     | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |