# GetAllChecksFCP

## Example Usage

```typescript
import { GetAllChecksFCP } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksFCP = {
  value: 7392.64,
  source: "web-vitals",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `value`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `previousValue`                                              | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `source`                                                     | [models.GetAllChecksSource](../models/getallcheckssource.md) | :heavy_check_mark:                                           | N/A                                                          |