# UpdateProjectDataCacheRequest

## Example Usage

```typescript
import { UpdateProjectDataCacheRequest } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheRequest = {
  projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  requestBody: {
    disabled: true,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique project identifier                                                              | prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB                                                           |
| `teamId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | The Team identifier to perform the request on behalf of.                                   |                                                                                            |
| `slug`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | The Team slug to perform the request on behalf of.                                         |                                                                                            |
| `requestBody`                                                                              | [models.UpdateProjectDataCacheRequestBody](../models/updateprojectdatacacherequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |