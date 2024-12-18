# SubmitBillingDataRequestBody

## Example Usage

```typescript
import { SubmitBillingDataRequestBody } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequestBody = {
  timestamp: new Date("2023-09-05T22:28:02.223Z"),
  eod: new Date("2024-08-16T05:08:02.805Z"),
  period: {
    start: new Date("2024-02-12T09:16:32.311Z"),
    end: new Date("2023-11-14T18:33:31.564Z"),
  },
  billing: {
    items: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "958.35",
        quantity: 4877.65,
        units: "<value>",
        total: "<value>",
      },
    ],
  },
  usage: [
    {
      resourceId: "<id>",
      name: "<value>",
      type: "total",
      units: "<value>",
      dayValue: 6062.62,
      periodValue: 9890.88,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eod`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `period`                                                                                      | [models.Period](../models/period.md)                                                          | :heavy_check_mark:                                                                            | Period for the billing cycle.                                                                 |
| `billing`                                                                                     | *models.SubmitBillingDataBilling*                                                             | :heavy_check_mark:                                                                            | Billing data (interim invoicing data).                                                        |
| `usage`                                                                                       | [models.Usage](../models/usage.md)[]                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |