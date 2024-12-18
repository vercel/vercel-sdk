# PatchTeamSaml

## Example Usage

```typescript
import { PatchTeamSaml } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamSaml = {
  enforced: true,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `enforced`                                                | *boolean*                                                 | :heavy_minus_sign:                                        | Require that members of the team use SAML Single Sign-On. | true                                                      |
| `roles`                                                   | Record<string, *models.Roles*>                            | :heavy_minus_sign:                                        | Directory groups to role or access group mappings.        |                                                           |