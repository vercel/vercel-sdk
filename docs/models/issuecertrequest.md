# IssueCertRequest

## Example Usage

```typescript
import { IssueCertRequest } from "@vercel/sdk/models/issuecertop.js";

let value: IssueCertRequest = {
  requestBody: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `teamId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | The Team identifier to perform the request on behalf of.         |
| `slug`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The Team slug to perform the request on behalf of.               |
| `requestBody`                                                    | [models.IssueCertRequestBody](../models/issuecertrequestbody.md) | :heavy_check_mark:                                               | N/A                                                              |