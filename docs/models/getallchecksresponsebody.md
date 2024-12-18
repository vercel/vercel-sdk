# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksResponseBody = {
  checks: [
    {
      createdAt: 939.41,
      id: "<id>",
      integrationId: "<id>",
      name: "<value>",
      rerequestable: false,
      status: "running",
      updatedAt: 9292.96,
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `checks`                               | [models.Checks](../models/checks.md)[] | :heavy_check_mark:                     | N/A                                    |