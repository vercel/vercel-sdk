# SearchRepoRequest

## Example Usage

```typescript
import { SearchRepoRequest } from "@vercel/sdk/models/searchrepoop.js";

let value: SearchRepoRequest = {
  host: "ghes-test.now.systems",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `query`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `namespaceId`                                                                     | *models.NamespaceId*                                                              | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `provider`                                                                        | [models.QueryParamProvider](../models/queryparamprovider.md)                      | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `installationId`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `host`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The custom Git host if using a custom Git provider, like GitHub Enterprise Server | ghes-test.now.systems                                                             |
| `teamId`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | The Team identifier to perform the request on behalf of.                          |                                                                                   |
| `slug`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The Team slug to perform the request on behalf of.                                |                                                                                   |