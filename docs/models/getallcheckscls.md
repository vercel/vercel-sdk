# GetAllChecksCLS

## Example Usage

```typescript
import { GetAllChecksCLS } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksCLS = {
  value: 2828.07,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `value`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `previousValue`                                                                          | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [models.GetAllChecksChecksResponseSource](../models/getallcheckschecksresponsesource.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |