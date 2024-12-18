# SubmitInvoiceRequest

## Example Usage

```typescript
import { SubmitInvoiceRequest } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    invoiceDate: new Date("2023-10-31T05:11:34.005Z"),
    period: {
      start: new Date("2022-08-22T02:23:53.093Z"),
      end: new Date("2023-06-07T08:51:38.406Z"),
    },
    items: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "112.99",
        quantity: 4446.25,
        units: "<value>",
        total: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `integrationConfigurationId`                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestBody`                                                            | [models.SubmitInvoiceRequestBody](../models/submitinvoicerequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |