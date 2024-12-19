# UpdateEdgeConfigResponseBody

An Edge Config

## Example Usage

```typescript
import { UpdateEdgeConfigResponseBody } from "@vercel/sdk/models/updateedgeconfigop.js";

let value: UpdateEdgeConfigResponseBody = {
  sizeInBytes: 1816.22,
  itemCount: 1122.24,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                           | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `updatedAt`                                                                                                                                           | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `id`                                                                                                                                                  | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `slug`                                                                                                                                                | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores). |
| `ownerId`                                                                                                                                             | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `digest`                                                                                                                                              | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `transfer`                                                                                                                                            | [models.UpdateEdgeConfigTransfer](../models/updateedgeconfigtransfer.md)                                                                              | :heavy_minus_sign:                                                                                                                                    | Keeps track of the current state of the Edge Config while it gets transferred.                                                                        |
| `schema`                                                                                                                                              | [models.UpdateEdgeConfigSchema](../models/updateedgeconfigschema.md)                                                                                  | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `purpose`                                                                                                                                             | [models.UpdateEdgeConfigPurpose](../models/updateedgeconfigpurpose.md)                                                                                | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `sizeInBytes`                                                                                                                                         | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `itemCount`                                                                                                                                           | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |