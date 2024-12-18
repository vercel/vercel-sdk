# RequestBodyConditionGroup

## Example Usage

```typescript
import { RequestBodyConditionGroup } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBodyConditionGroup = {
  conditions: [
    {
      type: "geo_country_region",
      op: "gt",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `conditions`                                                         | [models.RequestBodyConditions](../models/requestbodyconditions.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |