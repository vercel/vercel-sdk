# FilterProjectEnvsResponseBodyInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { FilterProjectEnvsResponseBodyInternalContentHint } from "@vercel/sdk/models/filterprojectenvsop.js";

let value: FilterProjectEnvsResponseBodyInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [models.FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType](../models/filterprojectenvsresponsebodyprojectsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `encryptedValue`                                                                                                                                               | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                   |