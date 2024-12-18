# GetCheckCLS

## Example Usage

```typescript
import { GetCheckCLS } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckCLS = {
  value: 2894.06,
  source: "web-vitals",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `value`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousValue`                                                                  | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `source`                                                                         | [models.GetCheckChecksResponseSource](../models/getcheckchecksresponsesource.md) | :heavy_check_mark:                                                               | N/A                                                                              |