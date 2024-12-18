# CancelDeploymentIntegrations

## Example Usage

```typescript
import { CancelDeploymentIntegrations } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentIntegrations = {
  status: "skipped",
  startedAt: 6174.97,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [models.CancelDeploymentDeploymentsStatus](../models/canceldeploymentdeploymentsstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `startedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `skippedBy`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |