# SearchRepoResponseBody2

## Example Usage

```typescript
import { SearchRepoResponseBody2 } from "@vercel/sdk/models/searchrepoop.js";

let value: SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "bitbucket",
    namespaceId: 5369.99,
  },
  repos: [
    {
      id: 3961.85,
      provider: "gitlab",
      url: "https://incomparable-puppet.biz/",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: 6867.83,
        name: "<value>",
      },
      ownerType: "user",
      private: false,
      defaultBranch: "<value>",
      updatedAt: 7689.99,
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |