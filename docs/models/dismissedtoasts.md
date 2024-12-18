# DismissedToasts

A record of when, under a certain scopeId, a toast was dismissed

## Example Usage

```typescript
import { DismissedToasts } from "@vercel/sdk/models/authuser.js";

let value: DismissedToasts = {
  name: "<value>",
  dismissals: [
    {
      scopeId: "<id>",
      createdAt: 1548.41,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `dismissals`                                   | [models.Dismissals](../models/dismissals.md)[] | :heavy_check_mark:                             | N/A                                            |