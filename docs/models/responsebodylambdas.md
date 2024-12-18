# ResponseBodyLambdas

A partial representation of a Build used by the deployment endpoint.

## Example Usage

```typescript
import { ResponseBodyLambdas } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyLambdas = {
  output: [
    {
      path: "/var",
      functionName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `entrypoint`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `readyState`                                                                                                         | [models.GetDeploymentResponseBodyDeploymentsReadyState](../models/getdeploymentresponsebodydeploymentsreadystate.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `readyStateAt`                                                                                                       | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `output`                                                                                                             | [models.GetDeploymentResponseBodyOutput](../models/getdeploymentresponsebodyoutput.md)[]                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |