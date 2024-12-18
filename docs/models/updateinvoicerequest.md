# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@vercel/sdk/models/updateinvoiceop.js";

let value: UpdateInvoiceRequest = {
  integrationConfigurationId: "<id>",
  invoiceId: "<id>",
  requestBody: {
    action: "refund",
    reason: "<value>",
    total: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `integrationConfigurationId`                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `invoiceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestBody`                                                            | [models.UpdateInvoiceRequestBody](../models/updateinvoicerequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |