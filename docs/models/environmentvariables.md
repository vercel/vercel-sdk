# EnvironmentVariables

## Example Usage

```typescript
import { EnvironmentVariables } from "@vercel/sdk/models/createprojectop.js";

let value: EnvironmentVariables = {
  key: "<key>",
  target: "production",
  value: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `key`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | Name of the ENV variable                                                          |
| `target`                                                                          | *models.CreateProjectTarget*                                                      | :heavy_check_mark:                                                                | Deployment Target or Targets in which the ENV variable will be used               |
| `gitBranch`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | If defined, the git branch of the environment variable (must have target=preview) |
| `type`                                                                            | [models.CreateProjectType](../models/createprojecttype.md)                        | :heavy_minus_sign:                                                                | Type of the ENV variable                                                          |
| `value`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | Value for the ENV variable                                                        |