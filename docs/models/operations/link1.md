# Link1

## Example Usage

```typescript
import { Link1 } from "@vercel/sdk/models/operations/updateprojectdatacache.js";

let value: Link1 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://shallow-exploration.info",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `org`                                                                                                                                                        | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `repoOwnerId`                                                                                                                                                | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | A new field, should be included in all new project links, is being added just in time when a deployment is created. This is needed for Protected Git scopes. |
| `repo`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `repoId`                                                                                                                                                     | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `type`                                                                                                                                                       | [operations.LinkType](../../models/operations/linktype.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `createdAt`                                                                                                                                                  | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `deployHooks`                                                                                                                                                | [operations.DeployHooks](../../models/operations/deployhooks.md)[]                                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `gitCredentialId`                                                                                                                                            | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `updatedAt`                                                                                                                                                  | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `sourceless`                                                                                                                                                 | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `productionBranch`                                                                                                                                           | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |