# JoinTeamRequest

## Example Usage

```typescript
import { JoinTeamRequest } from "@vercel/sdk/models/jointeamop.js";

let value: JoinTeamRequest = {
  teamId: "<id>",
  requestBody: {
    inviteCode: "fisdh38aejkeivn34nslfore9vjtn4ls",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `teamId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `requestBody`                                                  | [models.JoinTeamRequestBody](../models/jointeamrequestbody.md) | :heavy_check_mark:                                             | N/A                                                            |