# UpdateCheckVirtualExperienceScore

## Example Usage

```typescript
import { UpdateCheckVirtualExperienceScore } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckVirtualExperienceScore = {
  value: 6994.79,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                                        | *number*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `previousValue`                                                                                                                                                | *number*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `source`                                                                                                                                                       | [models.UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource](../models/updatecheckchecksresponse200applicationjsonresponsebodyoutputsource.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |