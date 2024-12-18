# RequestAccessToTeamResponseBody

Successfuly requested access to the team.

## Example Usage

```typescript
import { RequestAccessToTeamResponseBody } from "@vercel/sdk/models/requestaccesstoteamop.js";

let value: RequestAccessToTeamResponseBody = {
  teamSlug: "<value>",
  teamName: "<value>",
  github: {},
  gitlab: {},
  bitbucket: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `teamSlug`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `teamName`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `confirmed`                                                                                  | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `joinedFrom`                                                                                 | [models.RequestAccessToTeamTeamsJoinedFrom](../models/requestaccesstoteamteamsjoinedfrom.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `accessRequestedAt`                                                                          | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `github`                                                                                     | [models.Github](../models/github.md)                                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `gitlab`                                                                                     | [models.Gitlab](../models/gitlab.md)                                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `bitbucket`                                                                                  | [models.Bitbucket](../models/bitbucket.md)                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |