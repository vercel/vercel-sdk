# UpdateCheckLCP

## Example Usage

```typescript
import { UpdateCheckLCP } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckLCP = {
  value: 9527.49,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `value`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `previousValue`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `source`                                                                                     | [models.UpdateCheckChecksResponse200Source](../models/updatecheckchecksresponse200source.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |