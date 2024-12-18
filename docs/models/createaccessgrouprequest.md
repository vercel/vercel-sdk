# CreateAccessGroupRequest

## Example Usage

```typescript
import { CreateAccessGroupRequest } from "@vercel/sdk/models/createaccessgroupop.js";

let value: CreateAccessGroupRequest = {
  requestBody: {
    name: "My access group",
    projects: [
      {
        projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
        role: "ADMIN",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The Team identifier to perform the request on behalf of.                         |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               |
| `requestBody`                                                                    | [models.CreateAccessGroupRequestBody](../models/createaccessgrouprequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |