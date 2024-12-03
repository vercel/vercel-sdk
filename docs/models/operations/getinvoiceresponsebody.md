# GetInvoiceResponseBody

## Example Usage

```typescript
import { GetInvoiceResponseBody } from "@vercel/sdk/models/operations/getinvoice.js";

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
      price: "559.65",
      quantity: 6229.68,
      units: "<value>",
      total: "<value>",
    },
  ],
  total: "<value>",
  created: "<value>",
  updated: "<value>",
  state: "refunded",
  test: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `invoiceId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `externalId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `invoiceNumber`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `invoiceDate`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `period`                                                                           | [operations.GetInvoicePeriod](../../models/operations/getinvoiceperiod.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `memo`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `items`                                                                            | [operations.GetInvoiceItems](../../models/operations/getinvoiceitems.md)[]         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `discounts`                                                                        | [operations.GetInvoiceDiscounts](../../models/operations/getinvoicediscounts.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `total`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `created`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updated`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `state`                                                                            | [operations.State](../../models/operations/state.md)                               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `refundReason`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `refundTotal`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `test`                                                                             | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |