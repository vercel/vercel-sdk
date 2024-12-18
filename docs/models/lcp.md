# Lcp

## Example Usage

```typescript
import { Lcp } from "@vercel/sdk/models/updatecheckop.js";

let value: Lcp = {
  value: 1200,
  previousValue: 1000,
  source: "web-vitals",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `value`                                                                | *number*                                                               | :heavy_check_mark:                                                     | Largest Contentful Paint value                                         | 1200                                                                   |
| `previousValue`                                                        | *number*                                                               | :heavy_minus_sign:                                                     | Previous Largest Contentful Paint value to display a delta             | 1000                                                                   |
| `source`                                                               | [models.UpdateCheckChecksSource](../models/updatecheckcheckssource.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |