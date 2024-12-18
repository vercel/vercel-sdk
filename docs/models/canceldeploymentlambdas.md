# CancelDeploymentLambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { CancelDeploymentLambdas } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentLambdas = {
  output: [
    {
      path: "/usr/libdata",
      functionName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `entrypoint`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `readyState`                                                                                       | [models.CancelDeploymentDeploymentsReadyState](../models/canceldeploymentdeploymentsreadystate.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `readyStateAt`                                                                                     | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `output`                                                                                           | [models.CancelDeploymentOutput](../models/canceldeploymentoutput.md)[]                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |