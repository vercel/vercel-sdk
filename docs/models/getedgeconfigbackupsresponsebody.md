# GetEdgeConfigBackupsResponseBody

## Example Usage

```typescript
import { GetEdgeConfigBackupsResponseBody } from "@vercel/sdk/models/getedgeconfigbackupsop.js";

let value: GetEdgeConfigBackupsResponseBody = {
  backups: [
    {
      id: "<id>",
      lastModified: 6962.19,
    },
  ],
  pagination: {
    hasNext: false,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `backups`                                                                            | [models.Backups](../models/backups.md)[]                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [models.GetEdgeConfigBackupsPagination](../models/getedgeconfigbackupspagination.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |