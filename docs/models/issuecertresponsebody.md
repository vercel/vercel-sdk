# IssueCertResponseBody

## Example Usage

```typescript
import { IssueCertResponseBody } from "@vercel/sdk/models/issuecertop.js";

let value: IssueCertResponseBody = {
  id: "<id>",
  createdAt: 220.18,
  expiresAt: 7340.76,
  autoRenew: false,
  cns: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_check_mark: | N/A                |
| `autoRenew`        | *boolean*          | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |