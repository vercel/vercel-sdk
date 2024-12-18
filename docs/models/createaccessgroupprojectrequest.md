# CreateAccessGroupProjectRequest

## Example Usage

```typescript
import { CreateAccessGroupProjectRequest } from "@vercel/sdk/models/createaccessgroupprojectop.js";

let value: CreateAccessGroupProjectRequest = {
  accessGroupIdOrName: "<value>",
  requestBody: {
    projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
    role: "ADMIN",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accessGroupIdOrName`                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team identifier to perform the request on behalf of.                                       |
| `slug`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team slug to perform the request on behalf of.                                             |
| `requestBody`                                                                                  | [models.CreateAccessGroupProjectRequestBody](../models/createaccessgroupprojectrequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |