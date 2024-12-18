# GetDeploymentResponseBodyLambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { GetDeploymentResponseBodyLambdas } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentResponseBodyLambdas = {
  output: [
    {
      path: "/etc/defaults",
      functionName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `entrypoint`                                                                                                                         | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `readyState`                                                                                                                         | [models.GetDeploymentResponseBodyDeploymentsResponseReadyState](../models/getdeploymentresponsebodydeploymentsresponsereadystate.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `readyStateAt`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `output`                                                                                                                             | [models.ResponseBodyOutput](../models/responsebodyoutput.md)[]                                                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |