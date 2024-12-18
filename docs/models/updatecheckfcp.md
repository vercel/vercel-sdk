# UpdateCheckFCP

## Example Usage

```typescript
import { UpdateCheckFCP } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckFCP = {
  value: 2230.82,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `value`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `previousValue`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `source`                                                                               | [models.UpdateCheckChecksResponseSource](../models/updatecheckchecksresponsesource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |