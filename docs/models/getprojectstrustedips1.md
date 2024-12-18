# GetProjectsTrustedIps1

## Example Usage

```typescript
import { GetProjectsTrustedIps1 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsTrustedIps1 = {
  deploymentType: "prod_deployment_urls_and_all_previews",
  addresses: [
    {
      value: "<value>",
    },
  ],
  protectionMode: "exclusive",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                               | [models.GetProjectsTrustedIpsDeploymentType](../models/getprojectstrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `addresses`                                                                                    | [models.GetProjectsTrustedIpsAddresses](../models/getprojectstrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `protectionMode`                                                                               | [models.GetProjectsTrustedIpsProtectionMode](../models/getprojectstrustedipsprotectionmode.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |