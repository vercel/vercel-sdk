# SubmitInvoicePeriod

Subscription period for this billing cycle.

## Example Usage

```typescript
import { SubmitInvoicePeriod } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoicePeriod = {
  start: new Date("2022-11-27T15:57:29.589Z"),
  end: new Date("2024-08-02T13:23:31.132Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |