# Scopes2

The access scopes granted to the token.

## Example Usage

```typescript
import { Scopes2 } from "@vercel/sdk/models/authtoken.js";

let value: Scopes2 = {
  type: "team",
  teamId: "<id>",
  origin: "passkey",
  createdAt: 8408.30,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [models.ScopesType](../models/scopestype.md)                       | :heavy_check_mark:                                                 | N/A                                                                |
| `teamId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `origin`                                                           | [models.AuthTokenScopesOrigin](../models/authtokenscopesorigin.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `expiresAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |