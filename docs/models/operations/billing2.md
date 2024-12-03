# Billing2

## Example Usage

```typescript
import { Billing2 } from "@vercel/sdk/models/operations/submitbillingdata.js";

let value: Billing2 = {
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "313.38",
      quantity: 2075.13,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [operations.BillingItems](../../models/operations/billingitems.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `discounts`                                                          | [operations.Discounts](../../models/operations/discounts.md)[]       | :heavy_minus_sign:                                                   | N/A                                                                  |