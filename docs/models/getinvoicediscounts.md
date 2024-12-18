# GetInvoiceDiscounts

## Example Usage

```typescript
import { GetInvoiceDiscounts } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceDiscounts = {
  billingPlanId: "<id>",
  name: "<value>",
  amount: "946.56",
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