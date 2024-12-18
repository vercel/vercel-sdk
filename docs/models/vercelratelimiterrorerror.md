# VercelRateLimitErrorError

## Example Usage

```typescript
import { VercelRateLimitErrorError } from "@vercel/sdk/models/vercelratelimiterror.js";

let value: VercelRateLimitErrorError = {
  message: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `code`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `message`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `limit`                                                | [models.RateLimitNotice](../models/ratelimitnotice.md) | :heavy_minus_sign:                                     | N/A                                                    |