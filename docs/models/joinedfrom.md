# JoinedFrom

## Example Usage

```typescript
import { JoinedFrom } from "@vercel/sdk/models/teamlimited.js";

let value: JoinedFrom = {
  origin: "dsync",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `origin`                             | [models.Origin](../models/origin.md) | :heavy_check_mark:                   | N/A                                  |
| `commitId`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `repoId`                             | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `repoPath`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `gitUserId`                          | *models.GitUserId*                   | :heavy_minus_sign:                   | N/A                                  |
| `gitUserLogin`                       | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `ssoUserId`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `ssoConnectedAt`                     | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `idpUserId`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `dsyncUserId`                        | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `dsyncConnectedAt`                   | *number*                             | :heavy_minus_sign:                   | N/A                                  |