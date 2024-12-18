# RateLimitNotice

## Example Usage

```typescript
import { RateLimitNotice } from "@vercel/sdk/models/ratelimitnotice.js";

let value: RateLimitNotice = {
  remaining: 227741,
  reset: 446793,
  resetMs: 836991,
  total: 221824,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `remaining`        | *number*           | :heavy_check_mark: | N/A                |
| `reset`            | *number*           | :heavy_check_mark: | N/A                |
| `resetMs`          | *number*           | :heavy_check_mark: | N/A                |
| `total`            | *number*           | :heavy_check_mark: | N/A                |