# ResponseBodyBillingPlan

## Example Usage

```typescript
import { ResponseBodyBillingPlan } from "@vercel/sdk/models/getconfigurationsop.js";

let value: ResponseBodyBillingPlan = {
  id: "<id>",
  type: "prepayment",
  name: "<value>",
  description: "fax hence optimistically militate rusty so",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `type`                                                                                                                                   | [models.GetConfigurationsResponseBodyIntegrationsResponse200Type](../models/getconfigurationsresponsebodyintegrationsresponse200type.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `scope`                                                                                                                                  | [models.GetConfigurationsResponseBodyScope](../models/getconfigurationsresponsebodyscope.md)                                             | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `paymentMethodRequired`                                                                                                                  | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `preauthorizationAmount`                                                                                                                 | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `cost`                                                                                                                                   | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `details`                                                                                                                                | [models.ResponseBodyDetails](../models/responsebodydetails.md)[]                                                                         | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `heightlightedDetails`                                                                                                                   | [models.ResponseBodyHeightlightedDetails](../models/responsebodyheightlighteddetails.md)[]                                               | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `quote`                                                                                                                                  | [models.ResponseBodyQuote](../models/responsebodyquote.md)[]                                                                             | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `effectiveDate`                                                                                                                          | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |