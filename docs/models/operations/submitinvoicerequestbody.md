# SubmitInvoiceRequestBody

## Example Usage

```typescript
import { SubmitInvoiceRequestBody } from "@vercel/sdk/models/operations/submitinvoice.js";

let value: SubmitInvoiceRequestBody = {
  invoiceDate: new Date("2024-09-18T20:39:17.763Z"),
  period: {
    start: new Date("2024-03-31T14:23:29.572Z"),
    end: new Date("2023-09-07T23:43:29.550Z"),
  },
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "836.75",
      quantity: 2936.17,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `invoiceDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Invoice date. Must be within the period's start and end.                                      |
| `memo`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Additional memo for the invoice.                                                              |
| `period`                                                                                      | [operations.SubmitInvoicePeriod](../../models/operations/submitinvoiceperiod.md)              | :heavy_check_mark:                                                                            | Subscription period for this billing cycle.                                                   |
| `items`                                                                                       | [operations.SubmitInvoiceItems](../../models/operations/submitinvoiceitems.md)[]              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discounts`                                                                                   | [operations.SubmitInvoiceDiscounts](../../models/operations/submitinvoicediscounts.md)[]      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `test`                                                                                        | [operations.Test](../../models/operations/test.md)                                            | :heavy_minus_sign:                                                                            | Test mode                                                                                     |