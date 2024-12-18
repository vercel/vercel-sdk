# GetTeamMembersRequest

## Example Usage

```typescript
import { GetTeamMembersRequest } from "@vercel/sdk/models/getteammembersop.js";

let value: GetTeamMembersRequest = {
  limit: 20,
  since: 1540095775951,
  until: 1540095775951,
  role: "OWNER",
  teamId: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Limit how many teams should be returned                                       | 20                                                                            |
| `since`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Timestamp in milliseconds to only include members added since then.           | 1540095775951                                                                 |
| `until`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Timestamp in milliseconds to only include members added until then.           | 1540095775951                                                                 |
| `search`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Search team members by their name, username, and email.                       |                                                                               |
| `role`                                                                        | [models.QueryParamRole](../models/queryparamrole.md)                          | :heavy_minus_sign:                                                            | Only return members with the specified team role.                             | OWNER                                                                         |
| `excludeProject`                                                              | *string*                                                                      | :heavy_minus_sign:                                                            | Exclude members who belong to the specified project.                          |                                                                               |
| `eligibleMembersForProjectId`                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | Include team members who are eligible to be members of the specified project. |                                                                               |
| `teamId`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | The Team identifier to perform the request on behalf of.                      |                                                                               |