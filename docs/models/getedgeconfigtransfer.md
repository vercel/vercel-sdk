# GetEdgeConfigTransfer

Keeps track of the current state of the Edge Config while it gets transferred.

## Example Usage

```typescript
import { GetEdgeConfigTransfer } from "@vercel/sdk/models/getedgeconfigop.js";

let value: GetEdgeConfigTransfer = {
  fromAccountId: "<id>",
  startedAt: 3830.66,
  doneAt: 3931.22,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |