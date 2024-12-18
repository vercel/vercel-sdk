# GetConfigurationsRequest

## Example Usage

```typescript
import { GetConfigurationsRequest } from "@vercel/sdk/models/getconfigurationsop.js";

let value: GetConfigurationsRequest = {
  view: "project",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `view`                                                   | [models.View](../models/view.md)                         | :heavy_check_mark:                                       | N/A                                                      |
| `installationType`                                       | [models.InstallationType](../models/installationtype.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `integrationIdOrSlug`                                    | *string*                                                 | :heavy_minus_sign:                                       | ID of the integration                                    |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |