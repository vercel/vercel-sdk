# Records

## Example Usage

```typescript
import { Records } from "@vercel/sdk/models/getrecordsop.js";

let value: Records = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
  type: "HTTPS",
  value: "<value>",
  creator: "<value>",
  created: 4283.79,
  updated: 9231.59,
  createdAt: 1050.95,
  updatedAt: 9825.74,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `slug`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | [models.GetRecordsResponseBodyType](../models/getrecordsresponsebodytype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `value`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `mxPriority`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `priority`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `creator`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updated`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |