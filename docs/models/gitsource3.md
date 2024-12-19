# GitSource3

## Example Usage

```typescript
import { GitSource3 } from "@vercel/sdk/models/createdeploymentop.js";

let value: GitSource3 = {
  type: "gitlab",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [models.CreateDeploymentGitSourceDeploymentsResponse200ApplicationJSONType](../models/createdeploymentgitsourcedeploymentsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `projectId`                                                                                                                                                  | *models.GitSourceProjectId*                                                                                                                                  | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `ref`                                                                                                                                                        | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `sha`                                                                                                                                                        | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `prId`                                                                                                                                                       | *number*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |