# UpdateResourceSecretsRequestBody

## Example Usage

```typescript
import { UpdateResourceSecretsRequestBody } from "@vercel/sdk/models/updateresourcesecretsop.js";

let value: UpdateResourceSecretsRequestBody = {
  secrets: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `secrets`                                | [models.Secrets](../models/secrets.md)[] | :heavy_check_mark:                       | N/A                                      |