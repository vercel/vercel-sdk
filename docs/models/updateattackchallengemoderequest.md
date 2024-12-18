# UpdateAttackChallengeModeRequest

## Example Usage

```typescript
import { UpdateAttackChallengeModeRequest } from "@vercel/sdk/models/updateattackchallengemodeop.js";

let value: UpdateAttackChallengeModeRequest = {
  requestBody: {
    projectId: "<id>",
    attackModeEnabled: false,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `teamId`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | The Team identifier to perform the request on behalf of.                                         |
| `slug`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The Team slug to perform the request on behalf of.                                               |
| `requestBody`                                                                                    | [models.UpdateAttackChallengeModeRequestBody](../models/updateattackchallengemoderequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |