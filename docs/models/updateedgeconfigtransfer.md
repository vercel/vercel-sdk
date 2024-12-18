# UpdateEdgeConfigTransfer

Keeps track of the current state of the Edge Config while it gets transferred.

## Example Usage

```typescript
import { UpdateEdgeConfigTransfer } from "@vercel/sdk/models/updateedgeconfigop.js";

let value: UpdateEdgeConfigTransfer = {
  fromAccountId: "<id>",
  startedAt: 9290.66,
  doneAt: 535.30,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |