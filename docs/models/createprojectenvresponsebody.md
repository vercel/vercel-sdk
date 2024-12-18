# CreateProjectEnvResponseBody

The environment variable was created successfully

## Example Usage

```typescript
import { CreateProjectEnvResponseBody } from "@vercel/sdk/models/createprojectenvop.js";

let value: CreateProjectEnvResponseBody = {
  created: [
    {},
  ],
  failed: [
    {
      error: {
        code: "<value>",
        message: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `created`                              | *models.Created*                       | :heavy_check_mark:                     | N/A                                    |
| `failed`                               | [models.Failed](../models/failed.md)[] | :heavy_check_mark:                     | N/A                                    |