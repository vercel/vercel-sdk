# GetCheckTBT

## Example Usage

```typescript
import { GetCheckTBT } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckTBT = {
  value: 1831.91,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `value`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `previousValue`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `source`                                                                               | [models.GetCheckChecksResponse200Source](../models/getcheckchecksresponse200source.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |