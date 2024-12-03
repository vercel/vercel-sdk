# UpdateResourceSecretsRequestBody

## Example Usage

```typescript
import { UpdateResourceSecretsRequestBody } from "@vercel/sdk/models/operations/updateresourcesecrets.js";

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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `secrets`                                                  | [operations.Secrets](../../models/operations/secrets.md)[] | :heavy_check_mark:                                         | N/A                                                        |