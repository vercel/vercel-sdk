# Link3

## Example Usage

```typescript
import { Link3 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: Link3 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://same-alligator.com",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `slug`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `owner`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [models.UpdateProjectDataCacheLinkProjectsType](../models/updateprojectdatacachelinkprojectstype.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `uuid`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `workspaceUuid`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deployHooks`                                                                                        | [models.UpdateProjectDataCacheLinkDeployHooks](../models/updateprojectdatacachelinkdeployhooks.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `gitCredentialId`                                                                                    | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `sourceless`                                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `productionBranch`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |