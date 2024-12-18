# Scopes1

The access scopes granted to the token.

## Example Usage

```typescript
import { Scopes1 } from "@vercel/sdk/models/authtoken.js";

let value: Scopes1 = {
  type: "user",
  origin: "bitbucket",
  createdAt: 1439.77,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [models.AuthTokenScopesType](../models/authtokenscopestype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `origin`                                                       | [models.ScopesOrigin](../models/scopesorigin.md)               | :heavy_check_mark:                                             | N/A                                                            |
| `createdAt`                                                    | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `expiresAt`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |