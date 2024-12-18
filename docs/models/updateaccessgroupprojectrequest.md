# UpdateAccessGroupProjectRequest

## Example Usage

```typescript
import { UpdateAccessGroupProjectRequest } from "@vercel/sdk/models/updateaccessgroupprojectop.js";

let value: UpdateAccessGroupProjectRequest = {
  accessGroupIdOrName: "<value>",
  projectId: "<id>",
  requestBody: {
    role: "ADMIN",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accessGroupIdOrName`                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `projectId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team identifier to perform the request on behalf of.                                       |
| `slug`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team slug to perform the request on behalf of.                                             |
| `requestBody`                                                                                  | [models.UpdateAccessGroupProjectRequestBody](../models/updateaccessgroupprojectrequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |