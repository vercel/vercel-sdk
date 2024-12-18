# ArtifactQueryRequest

## Example Usage

```typescript
import { ArtifactQueryRequest } from "@vercel/sdk/models/artifactqueryop.js";

let value: ArtifactQueryRequest = {
  requestBody: {
    hashes: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `teamId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The Team identifier to perform the request on behalf of.                 |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The Team slug to perform the request on behalf of.                       |
| `requestBody`                                                            | [models.ArtifactQueryRequestBody](../models/artifactqueryrequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |