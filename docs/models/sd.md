# Sd

Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.

## Example Usage

```typescript
import { Sd } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Sd = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `active`                                                               | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `action`                                                               | [models.PutFirewallConfigAction](../models/putfirewallconfigaction.md) | :heavy_check_mark:                                                     | N/A                                                                    |