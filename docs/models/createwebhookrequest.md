# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@vercel/sdk/models/createwebhookop.js";

let value: CreateWebhookRequest = {
  requestBody: {
    url: "https://dramatic-coast.org",
    events: [
      "deployment.integration.action.cancel",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `teamId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The Team identifier to perform the request on behalf of.                 |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The Team slug to perform the request on behalf of.                       |
| `requestBody`                                                            | [models.CreateWebhookRequestBody](../models/createwebhookrequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |