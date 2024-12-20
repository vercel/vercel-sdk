# CreateEdgeConfigTokenRequest

## Example Usage

```typescript
import { CreateEdgeConfigTokenRequest } from "@vercel/sdk/models/createedgeconfigtokenop.js";

let value: CreateEdgeConfigTokenRequest = {
  edgeConfigId: "<id>",
  requestBody: {
    label: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `edgeConfigId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team identifier to perform the request on behalf of.                                 |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team slug to perform the request on behalf of.                                       |
| `requestBody`                                                                            | [models.CreateEdgeConfigTokenRequestBody](../models/createedgeconfigtokenrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |