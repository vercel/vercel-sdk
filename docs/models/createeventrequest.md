# CreateEventRequest

## Example Usage

```typescript
import { CreateEventRequest } from "@vercel/sdk/models/createeventop.js";

let value: CreateEventRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    event: {
      type: "resource.updated",
      productId: "<id>",
      resourceId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `integrationConfigurationId`                                         | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `requestBody`                                                        | [models.CreateEventRequestBody](../models/createeventrequestbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |