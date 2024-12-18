# Ten

## Example Usage

```typescript
import { Ten } from "@vercel/sdk/models/createrecordop.js";

let value: Ten = {
  type: "CAA",
  ttl: 60,
  https: {
    priority: 10,
    target: "host.example.com",
    params: "alpn=h2,h3",
  },
  comment: "used to verify ownership of domain",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [models.CreateRecordRequestBodyDnsRequest10Type](../models/createrecordrequestbodydnsrequest10type.md) | :heavy_check_mark:                                                                                     | The type of record, it could be one of the valid DNS records.                                          |                                                                                                        |
| `ttl`                                                                                                  | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The TTL value. Must be a number between 60 and 2147483647. Default value is 60.                        | 60                                                                                                     |
| `https`                                                                                                | [models.RequestBodyHttps](../models/requestbodyhttps.md)                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `comment`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A comment to add context on what this DNS record is for                                                | used to verify ownership of domain                                                                     |