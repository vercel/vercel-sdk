# AssignAliasRequest

## Example Usage

```typescript
import { AssignAliasRequest } from "@vercel/sdk/models/assignaliasop.js";

let value: AssignAliasRequest = {
  id: "<id>",
  requestBody: {
    alias: "my-alias.vercel.app",
    redirect: null,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The ID of the deployment the aliases should be listed for            |
| `teamId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | The Team identifier to perform the request on behalf of.             |
| `slug`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The Team slug to perform the request on behalf of.                   |
| `requestBody`                                                        | [models.AssignAliasRequestBody](../models/assignaliasrequestbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |