# ResponseBodyRecords

## Example Usage

```typescript
import { ResponseBodyRecords } from "@vercel/sdk/models/getrecordsop.js";

let value: ResponseBodyRecords = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
  type: "SRV",
  value: "<value>",
  creator: "<value>",
  created: 7898.70,
  updated: 3172.60,
  createdAt: 9792.70,
  updatedAt: 6496.56,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `slug`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.GetRecordsResponseBodyDnsType](../models/getrecordsresponsebodydnstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `mxPriority`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `priority`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `creator`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `created`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updated`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |