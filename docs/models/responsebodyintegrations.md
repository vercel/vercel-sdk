# ResponseBodyIntegrations

## Example Usage

```typescript
import { ResponseBodyIntegrations } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyIntegrations = {
  status: "ready",
  startedAt: 1559.78,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                     | [models.GetDeploymentResponseBodyDeploymentsStatus](../models/getdeploymentresponsebodydeploymentsstatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `startedAt`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `completedAt`                                                                                                | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `skippedAt`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `skippedBy`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |