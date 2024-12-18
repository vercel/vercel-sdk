# CreateProjectOidcTokenConfig

## Example Usage

```typescript
import { CreateProjectOidcTokenConfig } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectOidcTokenConfig = {
  enabled: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `issuerMode`                                                                      | [models.CreateProjectIssuerMode](../models/createprojectissuermode.md)            | :heavy_minus_sign:                                                                | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com` |