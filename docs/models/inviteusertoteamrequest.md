# InviteUserToTeamRequest

## Example Usage

```typescript
import { InviteUserToTeamRequest } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamRequest = {
  teamId: "<id>",
  requestBody: {
    uid: "kr1PsOIzqEL5Xg6M4VZcZosf",
    email: "john@example.com",
    role: "BILLING",
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `requestBody`                                                                  | [models.InviteUserToTeamRequestBody](../models/inviteusertoteamrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |