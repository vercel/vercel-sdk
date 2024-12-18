# Attribution

Attribution information for the session or current page

## Example Usage

```typescript
import { Attribution } from "@vercel/sdk/models/createteamop.js";

let value: Attribution = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `sessionReferrer`              | *string*                       | :heavy_minus_sign:             | Session referrer               |
| `landingPage`                  | *string*                       | :heavy_minus_sign:             | Session landing page           |
| `pageBeforeConversionPage`     | *string*                       | :heavy_minus_sign:             | Referrer to the signup page    |
| `utm`                          | [models.Utm](../models/utm.md) | :heavy_minus_sign:             | N/A                            |