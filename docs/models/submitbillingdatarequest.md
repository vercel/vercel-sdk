# SubmitBillingDataRequest

## Example Usage

```typescript
import { SubmitBillingDataRequest } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    timestamp: new Date("2024-06-15T15:19:48.072Z"),
    eod: new Date("2023-01-09T07:15:52.390Z"),
    period: {
      start: new Date("2022-06-16T15:26:41.808Z"),
      end: new Date("2024-05-09T07:52:40.062Z"),
    },
    billing: {
      items: [
        {
          billingPlanId: "<id>",
          name: "<value>",
          price: "967.05",
          quantity: 1012.84,
          units: "<value>",
          total: "<value>",
        },
      ],
    },
    usage: [
      {
        resourceId: "<id>",
        name: "<value>",
        type: "interval",
        units: "<value>",
        dayValue: 3136.95,
        periodValue: 5124.08,
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `integrationConfigurationId`                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `requestBody`                                                                    | [models.SubmitBillingDataRequestBody](../models/submitbillingdatarequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |