# InviteUserToTeamProjects

## Example Usage

```typescript
import { InviteUserToTeamProjects } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamProjects = {
  projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
  role: "ADMIN",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `projectId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the project.                                                     | prj_ndlgr43fadlPyCtREAqxxdyFK                                              |
| `role`                                                                     | [models.InviteUserToTeamTeamsRole](../models/inviteusertoteamteamsrole.md) | :heavy_check_mark:                                                         | Sets the project roles for the invited user                                | ADMIN                                                                      |