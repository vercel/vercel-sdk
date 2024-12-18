# GetAllChecksTBT

## Example Usage

```typescript
import { GetAllChecksTBT } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksTBT = {
  value: 1201.97,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `value`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `previousValue`                                                                                | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [models.GetAllChecksChecksResponse200Source](../models/getallcheckschecksresponse200source.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |