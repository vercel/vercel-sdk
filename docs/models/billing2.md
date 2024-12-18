# Billing2

## Example Usage

```typescript
import { Billing2 } from "@vercel/sdk/models/submitbillingdataop.js";

let value: Billing2 = {
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "789.20",
      quantity: 6615.78,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `items`                                            | [models.BillingItems](../models/billingitems.md)[] | :heavy_check_mark:                                 | N/A                                                |
| `discounts`                                        | [models.Discounts](../models/discounts.md)[]       | :heavy_minus_sign:                                 | N/A                                                |