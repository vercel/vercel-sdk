# GetCheckFCP

## Example Usage

```typescript
import { GetCheckFCP } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckFCP = {
  value: 1317.98,
  source: "web-vitals",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `value`                                              | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `previousValue`                                      | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `source`                                             | [models.GetCheckSource](../models/getchecksource.md) | :heavy_check_mark:                                   | N/A                                                  |