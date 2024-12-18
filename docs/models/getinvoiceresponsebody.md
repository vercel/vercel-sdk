# GetInvoiceResponseBody

## Example Usage

```typescript
import { GetInvoiceResponseBody } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceResponseBody = {
  invoiceId: "<id>",
  invoiceDate: "<value>",
  period: {
    start: "<value>",
    end: "<value>",
  },
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "917.99",
      quantity: 4545.90,
      units: "<value>",
      total: "<value>",
    },
  ],
  total: "<value>",
  created: "<value>",
  updated: "<value>",
  state: "scheduled",
  test: false,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `invoiceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `externalId`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `invoiceNumber`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `invoiceDate`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `period`                                                         | [models.GetInvoicePeriod](../models/getinvoiceperiod.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `memo`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `items`                                                          | [models.GetInvoiceItems](../models/getinvoiceitems.md)[]         | :heavy_check_mark:                                               | N/A                                                              |
| `discounts`                                                      | [models.GetInvoiceDiscounts](../models/getinvoicediscounts.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `total`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `created`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `updated`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `state`                                                          | [models.State](../models/state.md)                               | :heavy_check_mark:                                               | N/A                                                              |
| `refundReason`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `refundTotal`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `test`                                                           | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |