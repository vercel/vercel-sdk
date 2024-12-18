# CreateCheckResponseBody

## Example Usage

```typescript
import { CreateCheckResponseBody } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckResponseBody = {
  id: "<id>",
  name: "<value>",
  status: "completed",
  blocking: false,
  integrationId: "<id>",
  deploymentId: "<id>",
  createdAt: 4686.51,
  updatedAt: 9767.61,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `path`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `status`                                                           | [models.CreateCheckStatus](../models/createcheckstatus.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `conclusion`                                                       | [models.CreateCheckConclusion](../models/createcheckconclusion.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `blocking`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `output`                                                           | [models.CreateCheckOutput](../models/createcheckoutput.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `detailsUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `integrationId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `deploymentId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `externalId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `startedAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `rerequestable`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |