# Lambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { Lambdas } from "@vercel/sdk/models/createdeploymentop.js";

let value: Lambdas = {
  output: [
    {
      path: "/usr",
      functionName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `entrypoint`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `readyState`                                                                 | [models.CreateDeploymentReadyState](../models/createdeploymentreadystate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `readyStateAt`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `output`                                                                     | [models.CreateDeploymentOutput](../models/createdeploymentoutput.md)[]       | :heavy_check_mark:                                                           | N/A                                                                          |