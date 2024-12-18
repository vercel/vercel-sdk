# GetEdgeConfigBackupResponseBody2

## Example Usage

```typescript
import { GetEdgeConfigBackupResponseBody2 } from "@vercel/sdk/models/getedgeconfigbackupop.js";

let value: GetEdgeConfigBackupResponseBody2 = {
  user: {
    id: "<id>",
    username: "Ivy7",
    email: "Darwin_Donnelly@gmail.com",
  },
  id: "<id>",
  lastModified: 9596.96,
  backup: {
    digest: "<value>",
    items: {},
    slug: "<value>",
    updatedAt: 2402.92,
  },
  metadata: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `user`                                                           | [models.ResponseBodyUser](../models/responsebodyuser.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastModified`                                                   | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `backup`                                                         | [models.ResponseBodyBackup](../models/responsebodybackup.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `metadata`                                                       | [models.ResponseBodyMetadata](../models/responsebodymetadata.md) | :heavy_check_mark:                                               | N/A                                                              |