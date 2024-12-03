# GetInvoiceItems

## Example Usage

```typescript
import { GetInvoiceItems } from "@vercel/sdk/models/operations/getinvoice.js";

let value: GetInvoiceItems = {
  billingPlanId: "<id>",
  name: "<value>",
  price: "968.29",
  quantity: 3258.55,
  units: "<value>",
  total: "<value>",
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
| `price`            | *string*           | :heavy_check_mark: | N/A                |
| `quantity`         | *number*           | :heavy_check_mark: | N/A                |
| `units`            | *string*           | :heavy_check_mark: | N/A                |
| `total`            | *string*           | :heavy_check_mark: | N/A                |