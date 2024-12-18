# GetTeamMembersJoinedFrom

Map with information about the members origin if they joined by requesting access.

## Example Usage

```typescript
import { GetTeamMembersJoinedFrom } from "@vercel/sdk/models/getteammembersop.js";

let value: GetTeamMembersJoinedFrom = {
  origin: "bitbucket",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `origin`                                                         | [models.GetTeamMembersOrigin](../models/getteammembersorigin.md) | :heavy_check_mark:                                               | N/A                                                              |
| `commitId`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `repoId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `repoPath`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `gitUserId`                                                      | *models.GetTeamMembersGitUserId*                                 | :heavy_minus_sign:                                               | N/A                                                              |
| `gitUserLogin`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `ssoUserId`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `ssoConnectedAt`                                                 | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `idpUserId`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `dsyncUserId`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `dsyncConnectedAt`                                               | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |