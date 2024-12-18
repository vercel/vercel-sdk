# CreateProjectErl

## Example Usage

```typescript
import { CreateProjectErl } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectErl = {
  algo: "token_bucket",
  window: 9663.90,
  limit: 5076.36,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `algo`                                                     | [models.CreateProjectAlgo](../models/createprojectalgo.md) | :heavy_check_mark:                                         | N/A                                                        |
| `window`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `keys`                                                     | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |