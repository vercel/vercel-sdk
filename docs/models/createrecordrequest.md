# CreateRecordRequest

## Example Usage

```typescript
import { CreateRecordRequest } from "@vercel/sdk/models/createrecordop.js";

let value: CreateRecordRequest = {
  domain: "example.com",
  requestBody: {
    type: "MX",
    ttl: 60,
    value: "hello",
    comment: "used to verify ownership of domain",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | The domain used to create the DNS record.                | example.com                                              |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |                                                          |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |                                                          |
| `requestBody`                                            | *models.CreateRecordRequestBody*                         | :heavy_check_mark:                                       | N/A                                                      |                                                          |