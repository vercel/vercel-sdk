# UpdateEdgeConfigResponseBody

An Edge Config

## Example Usage

```typescript
import { UpdateEdgeConfigResponseBody } from "@vercel/sdk/models/operations/updateedgeconfig.js";

let value: UpdateEdgeConfigResponseBody = {
  sizeInBytes: 987.60,
  itemCount: 7486.06,
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
| `transfer`                                                                                                                                            | [operations.UpdateEdgeConfigTransfer](../../models/operations/updateedgeconfigtransfer.md)                                                            | :heavy_minus_sign:                                                                                                                                    | Keeps track of the current state of the Edge Config while it gets transferred.                                                                        |
| `schema`                                                                                                                                              | [operations.UpdateEdgeConfigSchema](../../models/operations/updateedgeconfigschema.md)                                                                | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `purpose`                                                                                                                                             | [operations.UpdateEdgeConfigPurpose](../../models/operations/updateedgeconfigpurpose.md)                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
| `sizeInBytes`                                                                                                                                         | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `itemCount`                                                                                                                                           | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |