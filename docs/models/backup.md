# Backup

## Example Usage

```typescript
import { Backup } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: Backup = {
  digest: "<value>",
  items: {},
  slug: "<value>",
  updatedAt: 4562.23,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `digest`                                                                                                                                              | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `items`                                                                                                                                               | Record<string, [models.ResponseBodyItems](../models/responsebodyitems.md)>                                                                            | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `slug`                                                                                                                                                | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores). |
| `updatedAt`                                                                                                                                           | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |