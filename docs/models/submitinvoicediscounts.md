# SubmitInvoiceDiscounts

## Example Usage

```typescript
import { SubmitInvoiceDiscounts } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceDiscounts = {
  billingPlanId: "<id>",
  name: "<value>",
  amount: "909.10",
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
| `amount`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |