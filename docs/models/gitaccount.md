# GitAccount

## Example Usage

```typescript
import { GitAccount } from "@vercel/sdk/models/searchrepoop.js";

let value: GitAccount = {
  provider: "gitlab",
  namespaceId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `provider`                                                       | [models.ResponseBodyProvider](../models/responsebodyprovider.md) | :heavy_check_mark:                                               | N/A                                                              |
| `namespaceId`                                                    | *models.ResponseBodyNamespaceId*                                 | :heavy_check_mark:                                               | N/A                                                              |