# ResponseBodyMembers

## Example Usage

```typescript
import { ResponseBodyMembers } from "@vercel/sdk/models/getprojectmembersop.js";

let value: ResponseBodyMembers = {
  avatar: "123a6c5209bc3778245d011443644c8d27dc2c50",
  email: "jane.doe@example.com",
  role: "ADMIN",
  computedProjectRole: "ADMIN",
  uid: "zTuNVUXEAvvnNN3IaqinkyMw",
  username: "jane-doe",
  name: "Jane Doe",
  createdAt: 1588720733602,
  teamRole: "CONTRIBUTOR",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `avatar`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | ID of the file for the Avatar of this member.                                              | 123a6c5209bc3778245d011443644c8d27dc2c50                                                   |
| `email`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | The email of this member.                                                                  | jane.doe@example.com                                                                       |
| `role`                                                                                     | [models.GetProjectMembersResponseBodyRole](../models/getprojectmembersresponsebodyrole.md) | :heavy_check_mark:                                                                         | Role of this user in the project.                                                          | ADMIN                                                                                      |
| `computedProjectRole`                                                                      | [models.ComputedProjectRole](../models/computedprojectrole.md)                             | :heavy_check_mark:                                                                         | Role of this user in the project.                                                          | ADMIN                                                                                      |
| `uid`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of this user.                                                                       | zTuNVUXEAvvnNN3IaqinkyMw                                                                   |
| `username`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique username of this user.                                                          | jane-doe                                                                                   |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | The name of this user.                                                                     | Jane Doe                                                                                   |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Timestamp in milliseconds when this member was added.                                      | 1588720733602                                                                              |
| `teamRole`                                                                                 | [models.ResponseBodyTeamRole](../models/responsebodyteamrole.md)                           | :heavy_check_mark:                                                                         | The role of this user in the team.                                                         | CONTRIBUTOR                                                                                |