# CreateCheckVirtualExperienceScore

## Example Usage

```typescript
import { CreateCheckVirtualExperienceScore } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckVirtualExperienceScore = {
  value: 3687.25,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                    | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `previousValue`                                                                                                            | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `source`                                                                                                                   | [models.CreateCheckChecksResponse200ApplicationJSONSource](../models/createcheckchecksresponse200applicationjsonsource.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |