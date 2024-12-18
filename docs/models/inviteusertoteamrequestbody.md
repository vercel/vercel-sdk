# InviteUserToTeamRequestBody

## Example Usage

```typescript
import { InviteUserToTeamRequestBody } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamRequestBody = {
  uid: "kr1PsOIzqEL5Xg6M4VZcZosf",
  email: "john@example.com",
  role: "DEVELOPER",
  projects: [
    {
      projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
      role: "ADMIN",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uid`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | The id of the user to invite                                               | kr1PsOIzqEL5Xg6M4VZcZosf                                                   |
| `email`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | The email address of the user to invite                                    | john@example.com                                                           |
| `role`                                                                     | [models.InviteUserToTeamRole](../models/inviteusertoteamrole.md)           | :heavy_minus_sign:                                                         | The role of the user to invite                                             | [<br/>"MEMBER",<br/>"VIEWER"<br/>]                                         |
| `projects`                                                                 | [models.InviteUserToTeamProjects](../models/inviteusertoteamprojects.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |