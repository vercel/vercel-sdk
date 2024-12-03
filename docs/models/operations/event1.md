# Event1

## Example Usage

```typescript
import { Event1 } from "@vercel/sdk/models/operations/createevent.js";

let value: Event1 = {
  type: "installation.updated",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [operations.EventType](../../models/operations/eventtype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `billingPlanId`                                              | *string*                                                     | :heavy_minus_sign:                                           | The installation-level billing plan ID                       |