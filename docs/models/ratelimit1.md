# RateLimit1

## Example Usage

```typescript
import { RateLimit1 } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: RateLimit1 = {
  algo: "fixed_window",
  window: 4212.73,
  limit: 9262.66,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `algo`                           | [models.Algo](../models/algo.md) | :heavy_check_mark:               | N/A                              |
| `window`                         | *number*                         | :heavy_check_mark:               | N/A                              |
| `limit`                          | *number*                         | :heavy_check_mark:               | N/A                              |
| `keys`                           | *string*[]                       | :heavy_check_mark:               | N/A                              |
| `action`                         | *models.RateLimitAction*         | :heavy_minus_sign:               | N/A                              |