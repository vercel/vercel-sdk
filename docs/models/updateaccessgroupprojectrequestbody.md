# UpdateAccessGroupProjectRequestBody

## Example Usage

```typescript
import { UpdateAccessGroupProjectRequestBody } from "@vercel/sdk/models/updateaccessgroupprojectop.js";

let value: UpdateAccessGroupProjectRequestBody = {
  role: "ADMIN",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `role`                                                                           | [models.UpdateAccessGroupProjectRole](../models/updateaccessgroupprojectrole.md) | :heavy_check_mark:                                                               | The project role that will be added to this Access Group.                        | ADMIN                                                                            |