# ManagedRules

## Example Usage

```typescript
import { ManagedRules } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: ManagedRules = {
  owasp: {
    active: false,
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `owasp`                            | [models.Owasp](../models/owasp.md) | :heavy_check_mark:                 | N/A                                |