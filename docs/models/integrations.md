# Integrations

## Example Usage

```typescript
import { Integrations } from "@vercel/sdk/models/createdeploymentop.js";

let value: Integrations = {
  status: "timeout",
  startedAt: 2942.66,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [models.CreateDeploymentDeploymentsStatus](../models/createdeploymentdeploymentsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `startedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedBy`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |