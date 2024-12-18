# Repos

## Example Usage

```typescript
import { Repos } from "@vercel/sdk/models/searchrepoop.js";

let value: Repos = {
  id: 3502.02,
  provider: "github-custom-host",
  url: "https://sunny-glider.name/",
  name: "<value>",
  slug: "<value>",
  namespace: "<value>",
  owner: {
    id: 15.95,
    name: "<value>",
  },
  ownerType: "user",
  private: false,
  defaultBranch: "<value>",
  updatedAt: 7791.11,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *models.ResponseBodyId*                                                              | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `provider`                                                                           | [models.SearchRepoResponseBodyProvider](../models/searchreporesponsebodyprovider.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `slug`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `namespace`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `owner`                                                                              | [models.Owner](../models/owner.md)                                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `ownerType`                                                                          | [models.ResponseBodyOwnerType](../models/responsebodyownertype.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `private`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `defaultBranch`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |