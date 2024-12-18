# DeleteAccessGroupProjectRequest

## Example Usage

```typescript
import { DeleteAccessGroupProjectRequest } from "@vercel/sdk/models/deleteaccessgroupprojectop.js";

let value: DeleteAccessGroupProjectRequest = {
  accessGroupIdOrName: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accessGroupIdOrName`                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |