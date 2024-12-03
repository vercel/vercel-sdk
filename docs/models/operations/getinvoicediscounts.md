# GetInvoiceDiscounts

## Example Usage

```typescript
import { GetInvoiceDiscounts } from "@vercel/sdk/models/operations/getinvoice.js";

let value: GetInvoiceDiscounts = {
  billingPlanId: "<id>",
  name: "<value>",
  amount: "502.51",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `billingPlanId`    | *string*           | :heavy_check_mark: | N/A                |
| `resourceId`       | *string*           | :heavy_minus_sign: | N/A                |
| `start`            | *string*           | :heavy_minus_sign: | N/A                |
| `end`              | *string*           | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `details`          | *string*           | :heavy_minus_sign: | N/A                |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |