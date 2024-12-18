# Reasons

An object describing the reason why the team is being deleted.

## Example Usage

```typescript
import { Reasons } from "@vercel/sdk/models/deleteteamop.js";

let value: Reasons = {
  slug: "<value>",
  description:
    "middle accurate repeatedly supposing ferociously where loyally beyond",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `slug`                                                        | *string*                                                      | :heavy_check_mark:                                            | Idenitifier slug of the reason why the team is being deleted. |
| `description`                                                 | *string*                                                      | :heavy_check_mark:                                            | Description of the reason why the team is being deleted.      |