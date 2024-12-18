# ExchangeSsoTokenRequestBody

## Example Usage

```typescript
import { ExchangeSsoTokenRequestBody } from "@vercel/sdk/models/exchangessotokenop.js";

let value: ExchangeSsoTokenRequestBody = {
  code: "<value>",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `code`                                             | *string*                                           | :heavy_check_mark:                                 | The sensitive code received from Vercel            |
| `state`                                            | *string*                                           | :heavy_minus_sign:                                 | The state received from the initialization request |
| `clientId`                                         | *string*                                           | :heavy_check_mark:                                 | The integration client id                          |
| `clientSecret`                                     | *string*                                           | :heavy_check_mark:                                 | The integration client secret                      |
| `redirectUri`                                      | *string*                                           | :heavy_minus_sign:                                 | The integration redirect URI                       |