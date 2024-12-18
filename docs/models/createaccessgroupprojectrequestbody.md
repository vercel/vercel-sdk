# CreateAccessGroupProjectRequestBody

## Example Usage

```typescript
import { CreateAccessGroupProjectRequestBody } from "@vercel/sdk/models/createaccessgroupprojectop.js";

let value: CreateAccessGroupProjectRequestBody = {
  projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
  role: "ADMIN",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the project.                                                           | prj_ndlgr43fadlPyCtREAqxxdyFK                                                    |
| `role`                                                                           | [models.CreateAccessGroupProjectRole](../models/createaccessgroupprojectrole.md) | :heavy_check_mark:                                                               | The project role that will be added to this Access Group.                        | ADMIN                                                                            |