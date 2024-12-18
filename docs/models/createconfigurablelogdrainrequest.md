# CreateConfigurableLogDrainRequest

## Example Usage

```typescript
import { CreateConfigurableLogDrainRequest } from "@vercel/sdk/models/createconfigurablelogdrainop.js";

let value: CreateConfigurableLogDrainRequest = {
  requestBody: {
    deliveryFormat: "json",
    url: "https://dental-responsibility.name/",
    sources: [
      "external",
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The Team identifier to perform the request on behalf of.                                           |
| `slug`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The Team slug to perform the request on behalf of.                                                 |
| `requestBody`                                                                                      | [models.CreateConfigurableLogDrainRequestBody](../models/createconfigurablelogdrainrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |