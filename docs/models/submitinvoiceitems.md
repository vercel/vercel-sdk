# SubmitInvoiceItems

## Example Usage

```typescript
import { SubmitInvoiceItems } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceItems = {
  billingPlanId: "<id>",
  name: "<value>",
  price: "844.45",
  quantity: 4301.81,
  units: "<value>",
  total: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Partner's resource ID.                                                                        |
| `billingPlanId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Partner's billing plan ID.                                                                    |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start and end are only needed if different from the period's start/end.                       |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start and end are only needed if different from the period's start/end.                       |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `details`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `units`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |