# RequestBodyConditions

## Example Usage

```typescript
import { RequestBodyConditions } from "@vercel/sdk/models/operations/updatefirewallconfig.js";

let value: RequestBodyConditions = {
  type: "geo_as_number",
  op: "re",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.UpdateFirewallConfigRequestBodyType](../../models/operations/updatefirewallconfigrequestbodytype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `op`                                                                                                             | [operations.RequestBodyOp](../../models/operations/requestbodyop.md)                                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `neg`                                                                                                            | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `key`                                                                                                            | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `value`                                                                                                          | *operations.UpdateFirewallConfigRequestBodySecurityRequest2Value*                                                | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |