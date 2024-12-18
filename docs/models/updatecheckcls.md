# UpdateCheckCLS

## Example Usage

```typescript
import { UpdateCheckCLS } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckCLS = {
  value: 4471.25,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                    | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `previousValue`                                                                                                            | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `source`                                                                                                                   | [models.UpdateCheckChecksResponse200ApplicationJSONSource](../models/updatecheckchecksresponse200applicationjsonsource.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |