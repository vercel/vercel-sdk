# GetTeamMembersResponseBody

## Example Usage

```typescript
import { GetTeamMembersResponseBody } from "@vercel/sdk/models/getteammembersop.js";

let value: GetTeamMembersResponseBody = {
  members: [
    {
      avatar: "123a6c5209bc3778245d011443644c8d27dc2c50",
      confirmed: true,
      email: "jane.doe@example.com",
      role: "OWNER",
      uid: "zTuNVUXEAvvnNN3IaqinkyMw",
      username: "jane-doe",
      name: "Jane Doe",
      createdAt: 1588720733602,
      accessRequestedAt: 1588820733602,
    },
  ],
  pagination: {
    hasNext: false,
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `members`                                                                | [models.GetTeamMembersMembers](../models/getteammembersmembers.md)[]     | :heavy_check_mark:                                                       | N/A                                                                      |
| `emailInviteCodes`                                                       | [models.EmailInviteCodes](../models/emailinvitecodes.md)[]               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `pagination`                                                             | [models.GetTeamMembersPagination](../models/getteammemberspagination.md) | :heavy_check_mark:                                                       | N/A                                                                      |