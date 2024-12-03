# ListAliasesProtectionBypass2

The protection bypass for the alias

## Example Usage

```typescript
import { ListAliasesProtectionBypass2 } from "@vercel/sdk/models/operations/listaliases.js";

let value: ListAliasesProtectionBypass2 = {
  createdAt: 2883.49,
  lastUpdatedAt: 2913.62,
  lastUpdatedBy: "<value>",
  access: "granted",
  scope: "user",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `lastUpdatedAt`                                                                                            | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `lastUpdatedBy`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `access`                                                                                                   | [operations.ProtectionBypassAccess](../../models/operations/protectionbypassaccess.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `scope`                                                                                                    | [operations.ListAliasesProtectionBypassScope](../../models/operations/listaliasesprotectionbypassscope.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |