# UpdateProjectRequest

## Example Usage

```typescript
import { UpdateProjectRequest } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectRequest = {
  idOrName: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  requestBody: {
    name: "a-project-name",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `idOrName`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The unique project identifier or the project name                        | prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB                                         |
| `teamId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The Team identifier to perform the request on behalf of.                 |                                                                          |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The Team slug to perform the request on behalf of.                       |                                                                          |
| `requestBody`                                                            | [models.UpdateProjectRequestBody](../models/updateprojectrequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |