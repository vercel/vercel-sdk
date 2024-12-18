# CreateCheckMetrics

## Example Usage

```typescript
import { CreateCheckMetrics } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckMetrics = {
  fcp: {
    value: 8209.93,
    source: "web-vitals",
  },
  lcp: {
    value: 971.01,
    source: "web-vitals",
  },
  cls: {
    value: 8379.45,
    source: "web-vitals",
  },
  tbt: {
    value: 960.98,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `fcp`                                                                                      | [models.CreateCheckFCP](../models/createcheckfcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lcp`                                                                                      | [models.CreateCheckLCP](../models/createchecklcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cls`                                                                                      | [models.CreateCheckCLS](../models/createcheckcls.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tbt`                                                                                      | [models.CreateCheckTBT](../models/createchecktbt.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `virtualExperienceScore`                                                                   | [models.CreateCheckVirtualExperienceScore](../models/createcheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |