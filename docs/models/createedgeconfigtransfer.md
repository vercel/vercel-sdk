# CreateEdgeConfigTransfer

Keeps track of the current state of the Edge Config while it gets transferred.

## Example Usage

```typescript
import { CreateEdgeConfigTransfer } from "@vercel/sdk/models/createedgeconfigop.js";

let value: CreateEdgeConfigTransfer = {
  fromAccountId: "<id>",
  startedAt: 6509.14,
  doneAt: 8273.13,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |