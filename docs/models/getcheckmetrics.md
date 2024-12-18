# GetCheckMetrics

## Example Usage

```typescript
import { GetCheckMetrics } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckMetrics = {
  fcp: {
    value: 201.08,
    source: "web-vitals",
  },
  lcp: {
    value: 8289.40,
    source: "web-vitals",
  },
  cls: {
    value: 46.95,
    source: "web-vitals",
  },
  tbt: {
    value: 6778.17,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `fcp`                                                                                | [models.GetCheckFCP](../models/getcheckfcp.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `lcp`                                                                                | [models.GetCheckLCP](../models/getchecklcp.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `cls`                                                                                | [models.GetCheckCLS](../models/getcheckcls.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tbt`                                                                                | [models.GetCheckTBT](../models/getchecktbt.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `virtualExperienceScore`                                                             | [models.GetCheckVirtualExperienceScore](../models/getcheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |