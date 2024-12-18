# Checks

## Example Usage

```typescript
import { Checks } from "@vercel/sdk/models/getallchecksop.js";

let value: Checks = {
  createdAt: 5666.01,
  id: "<id>",
  integrationId: "<id>",
  name: "<value>",
  rerequestable: false,
  status: "registered",
  updatedAt: 5232.48,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `completedAt`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `conclusion`                                                         | [models.GetAllChecksConclusion](../models/getallchecksconclusion.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createdAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `detailsUrl`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `integrationId`                                                      | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `output`                                                             | [models.GetAllChecksOutput](../models/getallchecksoutput.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `path`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `rerequestable`                                                      | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `startedAt`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `status`                                                             | [models.GetAllChecksStatus](../models/getallchecksstatus.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `updatedAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |