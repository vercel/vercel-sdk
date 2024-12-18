# Discounts

## Example Usage

```typescript
import { Discounts } from "@vercel/sdk/models/submitbillingdataop.js";

let value: Discounts = {
  billingPlanId: "<id>",
  name: "<value>",
  amount: "219.28",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billingPlanId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Partner's billing plan ID.                                                                    |
| `resourceId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Partner's resource ID.                                                                        |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start and end are only needed if different from the period's start/end.                       |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start and end are only needed if different from the period's start/end.                       |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Discount name.                                                                                |
| `details`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Discount details.                                                                             |
| `amount`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Discount amount.                                                                              |