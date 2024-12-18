# CreateProjectRequest

## Example Usage

```typescript
import { CreateProjectRequest } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectRequest = {
  requestBody: {
    name: "a-project-name",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `teamId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The Team identifier to perform the request on behalf of.                 |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The Team slug to perform the request on behalf of.                       |
| `requestBody`                                                            | [models.CreateProjectRequestBody](../models/createprojectrequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |