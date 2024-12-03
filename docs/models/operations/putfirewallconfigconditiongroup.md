# PutFirewallConfigConditionGroup

## Example Usage

```typescript
import { PutFirewallConfigConditionGroup } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: PutFirewallConfigConditionGroup = {
  conditions: [
    {
      type: "ja4_digest",
      op: "re",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                       | [operations.PutFirewallConfigConditions](../../models/operations/putfirewallconfigconditions.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |