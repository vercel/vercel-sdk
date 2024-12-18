# SubmitInvoiceRequestBody

## Example Usage

```typescript
import { SubmitInvoiceRequestBody } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequestBody = {
  invoiceDate: new Date("2024-02-04T17:02:52.370Z"),
  period: {
    start: new Date("2024-11-29T12:45:09.445Z"),
    end: new Date("2022-07-12T02:26:50.159Z"),
  },
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "202.75",
      quantity: 4905.49,
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
| `period`                                                                                      | [models.SubmitInvoicePeriod](../models/submitinvoiceperiod.md)                                | :heavy_check_mark:                                                                            | Subscription period for this billing cycle.                                                   |
| `items`                                                                                       | [models.SubmitInvoiceItems](../models/submitinvoiceitems.md)[]                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discounts`                                                                                   | [models.SubmitInvoiceDiscounts](../models/submitinvoicediscounts.md)[]                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `test`                                                                                        | [models.Test](../models/test.md)                                                              | :heavy_minus_sign:                                                                            | Test mode                                                                                     |