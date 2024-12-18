# UpdateCheckTBT

## Example Usage

```typescript
import { UpdateCheckTBT } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckTBT = {
  value: 8464.09,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                            | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `previousValue`                                                                                                                                    | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `source`                                                                                                                                           | [models.UpdateCheckChecksResponse200ApplicationJSONResponseBodySource](../models/updatecheckchecksresponse200applicationjsonresponsebodysource.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |