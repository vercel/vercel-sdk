# ListAccessGroupMembersResponseBody

## Example Usage

```typescript
import { ListAccessGroupMembersResponseBody } from "@vercel/sdk/models/listaccessgroupmembersop.js";

let value: ListAccessGroupMembersResponseBody = {
  members: [
    {
      email: "Rita_Strosin@gmail.com",
      uid: "<id>",
      username: "Osborne.Nikolaus",
      teamRole: "DEVELOPER",
    },
  ],
  pagination: {
    count: 2645.56,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `members`                                                                                | [models.Members](../models/members.md)[]                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | [models.ListAccessGroupMembersPagination](../models/listaccessgroupmemberspagination.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |