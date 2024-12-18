# UpdateTeamMemberRequestBody

## Example Usage

```typescript
import { UpdateTeamMemberRequestBody } from "@vercel/sdk/models/updateteammemberop.js";

let value: UpdateTeamMemberRequestBody = {
  confirmed: true,
  role: "[\"MEMBER\",\"VIEWER\"]",
  projects: [
    {
      projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
      role: "ADMIN",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `confirmed`                                                                  | *boolean*                                                                    | :heavy_minus_sign:                                                           | Accept a user who requested access to the team.                              | true                                                                         |
| `role`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The role in the team of the member.                                          | [<br/>"MEMBER",<br/>"VIEWER"<br/>]                                           |
| `projects`                                                                   | [models.UpdateTeamMemberProjects](../models/updateteammemberprojects.md)[]   | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `joinedFrom`                                                                 | [models.UpdateTeamMemberJoinedFrom](../models/updateteammemberjoinedfrom.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |