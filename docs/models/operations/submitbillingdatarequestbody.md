# SubmitBillingDataRequestBody

## Example Usage

```typescript
import { SubmitBillingDataRequestBody } from "@vercel/sdk/models/operations/submitbillingdata.js";

let value: SubmitBillingDataRequestBody = {
  timestamp: new Date("2022-07-07T14:30:34.396Z"),
  eod: new Date("2023-04-19T07:11:20.698Z"),
  period: {
    start: new Date("2022-12-18T12:57:11.461Z"),
    end: new Date("2022-03-23T05:46:16.749Z"),
  },
  billing: {
    items: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "771.85",
        quantity: 726.00,
        units: "<value>",
        total: "<value>",
      },
    ],
  },
  usage: [
    {
      resourceId: "<id>",
      name: "<value>",
      type: "rate",
      units: "<value>",
      dayValue: 2663.70,
      periodValue: 3685.99,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eod`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `period`                                                                                      | [operations.Period](../../models/operations/period.md)                                        | :heavy_check_mark:                                                                            | Period for the billing cycle.                                                                 |
| `billing`                                                                                     | *operations.Billing*                                                                          | :heavy_check_mark:                                                                            | Billing data (interim invoicing data).                                                        |
| `usage`                                                                                       | [operations.Usage](../../models/operations/usage.md)[]                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |