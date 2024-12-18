# GitNamespacesRequest

## Example Usage

```typescript
import { GitNamespacesRequest } from "@vercel/sdk/models/gitnamespacesop.js";

let value: GitNamespacesRequest = {
  host: "ghes-test.now.systems",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `host`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The custom Git host if using a custom Git provider, like GitHub Enterprise Server | ghes-test.now.systems                                                             |
| `provider`                                                                        | [models.Provider](../models/provider.md)                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |