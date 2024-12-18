# Five

## Example Usage

```typescript
import { Five } from "@vercel/sdk/models/createdeploymentop.js";

let value: Five = {
  owner: "<value>",
  ref: "<value>",
  slug: "<value>",
  type: "bitbucket",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `owner`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `ref`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sha`                                                                                                                  | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `slug`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [models.CreateDeploymentGitSourceDeploymentsRequestType](../models/createdeploymentgitsourcedeploymentsrequesttype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |