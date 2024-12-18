# UpdateCheckMetrics

## Example Usage

```typescript
import { UpdateCheckMetrics } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckMetrics = {
  fcp: {
    value: 2974.37,
    source: "web-vitals",
  },
  lcp: {
    value: 8137.98,
    source: "web-vitals",
  },
  cls: {
    value: 3965.06,
    source: "web-vitals",
  },
  tbt: {
    value: 8811.03,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `fcp`                                                                                      | [models.UpdateCheckFCP](../models/updatecheckfcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lcp`                                                                                      | [models.UpdateCheckLCP](../models/updatechecklcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cls`                                                                                      | [models.UpdateCheckCLS](../models/updatecheckcls.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tbt`                                                                                      | [models.UpdateCheckTBT](../models/updatechecktbt.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `virtualExperienceScore`                                                                   | [models.UpdateCheckVirtualExperienceScore](../models/updatecheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |