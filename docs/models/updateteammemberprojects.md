# UpdateTeamMemberProjects

## Example Usage

```typescript
import { UpdateTeamMemberProjects } from "@vercel/sdk/models/updateteammemberop.js";

let value: UpdateTeamMemberProjects = {
  projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
  role: "ADMIN",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the project.                                                                           | prj_ndlgr43fadlPyCtREAqxxdyFK                                                                    |
| `role`                                                                                           | [models.UpdateTeamMemberRole](../models/updateteammemberrole.md)                                 | :heavy_check_mark:                                                                               | The project role of the member that will be added. \"null\" will remove this project level role. | ADMIN                                                                                            |