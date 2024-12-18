# AddProjectMemberRequest

## Example Usage

```typescript
import { AddProjectMemberRequest } from "@vercel/sdk/models/addprojectmemberop.js";

let value: AddProjectMemberRequest = {
  idOrName: "prj_pavWOn1iLObbXLRiwVvzmPrTWyTf",
  requestBody: {
    uid: "ndlgr43fadlPyCtREAqxxdyFK",
    username: "example",
    email: "entity@example.com",
    role: "ADMIN",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `idOrName`                                               | *string*                                                 | :heavy_check_mark:                                       | The ID or name of the Project.                           | prj_pavWOn1iLObbXLRiwVvzmPrTWyTf                         |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |                                                          |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |                                                          |
| `requestBody`                                            | *models.AddProjectMemberRequestBody*                     | :heavy_check_mark:                                       | N/A                                                      |                                                          |