# CreateAuthTokenRequest

## Example Usage

```typescript
import { CreateAuthTokenRequest } from "@vercel/sdk/models/createauthtokenop.js";

let value: CreateAuthTokenRequest = {
  requestBody: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `teamId`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | The Team identifier to perform the request on behalf of.                     |
| `slug`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The Team slug to perform the request on behalf of.                           |
| `requestBody`                                                                | [models.CreateAuthTokenRequestBody](../models/createauthtokenrequestbody.md) | :heavy_check_mark:                                                           | N/A                                                                          |