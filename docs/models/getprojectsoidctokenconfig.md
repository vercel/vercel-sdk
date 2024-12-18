# GetProjectsOidcTokenConfig

## Example Usage

```typescript
import { GetProjectsOidcTokenConfig } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsOidcTokenConfig = {
  enabled: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `issuerMode`                                                                      | [models.GetProjectsIssuerMode](../models/getprojectsissuermode.md)                | :heavy_minus_sign:                                                                | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com` |