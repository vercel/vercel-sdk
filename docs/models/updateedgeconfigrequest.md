# UpdateEdgeConfigRequest

## Example Usage

```typescript
import { UpdateEdgeConfigRequest } from "@vercel/sdk/models/updateedgeconfigop.js";

let value: UpdateEdgeConfigRequest = {
  edgeConfigId: "<id>",
  requestBody: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `edgeConfigId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             |
| `requestBody`                                                                  | [models.UpdateEdgeConfigRequestBody](../models/updateedgeconfigrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |