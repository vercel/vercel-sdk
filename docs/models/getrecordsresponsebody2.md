# GetRecordsResponseBody2

## Example Usage

```typescript
import { GetRecordsResponseBody2 } from "@vercel/sdk/models/getrecordsop.js";

let value: GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "TXT",
      value: "<value>",
      creator: "<value>",
      created: 738.26,
      updated: 4909.66,
      createdAt: 7175.60,
      updatedAt: 7381.52,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `records`                                | [models.Records](../models/records.md)[] | :heavy_check_mark:                       | N/A                                      |