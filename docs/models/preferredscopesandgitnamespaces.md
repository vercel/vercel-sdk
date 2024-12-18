# PreferredScopesAndGitNamespaces

## Example Usage

```typescript
import { PreferredScopesAndGitNamespaces } from "@vercel/sdk/models/authuser.js";

let value: PreferredScopesAndGitNamespaces = {
  scopeId: "<id>",
  gitNamespaceId: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `scopeId`               | *string*                | :heavy_check_mark:      | N/A                     |
| `gitNamespaceId`        | *models.GitNamespaceId* | :heavy_check_mark:      | N/A                     |