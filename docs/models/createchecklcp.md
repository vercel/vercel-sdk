# CreateCheckLCP

## Example Usage

```typescript
import { CreateCheckLCP } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckLCP = {
  value: 6563.30,
  source: "web-vitals",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `value`                                                                | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousValue`                                                        | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `source`                                                               | [models.CreateCheckChecksSource](../models/createcheckcheckssource.md) | :heavy_check_mark:                                                     | N/A                                                                    |