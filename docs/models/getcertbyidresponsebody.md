# GetCertByIdResponseBody

## Example Usage

```typescript
import { GetCertByIdResponseBody } from "@vercel/sdk/models/getcertbyidop.js";

let value: GetCertByIdResponseBody = {
  id: "<id>",
  createdAt: 3056.95,
  expiresAt: 6942.91,
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