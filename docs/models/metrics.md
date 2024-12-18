# Metrics

Metrics about the page

## Example Usage

```typescript
import { Metrics } from "@vercel/sdk/models/updatecheckop.js";

let value: Metrics = {
  fcp: {
    value: 1200,
    previousValue: 900,
    source: "web-vitals",
  },
  lcp: {
    value: 1200,
    previousValue: 1000,
    source: "web-vitals",
  },
  cls: {
    value: 4,
    previousValue: 2,
    source: "web-vitals",
  },
  tbt: {
    value: 3000,
    previousValue: 3500,
    source: "web-vitals",
  },
  virtualExperienceScore: {
    value: 30,
    previousValue: 35,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `fcp`                                                                | [models.Fcp](../models/fcp.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `lcp`                                                                | [models.Lcp](../models/lcp.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `cls`                                                                | [models.Cls](../models/cls.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `tbt`                                                                | [models.Tbt](../models/tbt.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `virtualExperienceScore`                                             | [models.VirtualExperienceScore](../models/virtualexperiencescore.md) | :heavy_minus_sign:                                                   | N/A                                                                  |