# UpdateProjectLastAliasRequest

## Example Usage

```typescript
import { UpdateProjectLastAliasRequest } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectLastAliasRequest = {
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  jobStatus: "failed",
  requestedAt: 3952.33,
  type: "promote",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `fromDeploymentId`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `toDeploymentId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `jobStatus`                                                                                      | [models.UpdateProjectJobStatus](../models/updateprojectjobstatus.md)                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestedAt`                                                                                    | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [models.UpdateProjectProjectsResponse200Type](../models/updateprojectprojectsresponse200type.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |