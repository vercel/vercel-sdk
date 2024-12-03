# UpdateInvoiceRequestBody

## Example Usage

```typescript
import { UpdateInvoiceRequestBody } from "@vercel/sdk/models/operations/updateinvoice.js";

let value: UpdateInvoiceRequestBody = {
  action: "refund",
  reason: "<value>",
  total: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `action`                                                                                        | [operations.Action](../../models/operations/action.md)                                          | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `reason`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | Refund reason.                                                                                  |
| `total`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | The total amount to be refunded. Must be less than or equal to the total amount of the invoice. |