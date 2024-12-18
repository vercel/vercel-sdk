# CreateEdgeConfigRequest

## Example Usage

```typescript
import { CreateEdgeConfigRequest } from "@vercel/sdk/models/createedgeconfigop.js";

let value: CreateEdgeConfigRequest = {
  requestBody: {
    slug: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             |
| `requestBody`                                                                  | [models.CreateEdgeConfigRequestBody](../models/createedgeconfigrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |