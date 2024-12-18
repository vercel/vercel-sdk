# RemoveProjectEnvResponseBodyInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { RemoveProjectEnvResponseBodyInternalContentHint } from "@vercel/sdk/models/removeprojectenvop.js";

let value: RemoveProjectEnvResponseBodyInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [models.RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType](../models/removeprojectenvresponsebodyprojectsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `encryptedValue`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                 |