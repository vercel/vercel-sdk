# Active

## Example Usage

```typescript
import { Active } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Active = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 8948.70,
  updatedAt: "<value>",
  firewallEnabled: false,
  crs: {
    sd: {
      active: false,
      action: "deny",
    },
    ma: {
      active: false,
      action: "deny",
    },
    lfi: {
      active: false,
      action: "log",
    },
    rfi: {
      active: false,
      action: "deny",
    },
    rce: {
      active: false,
      action: "deny",
    },
    php: {
      active: false,
      action: "log",
    },
    gen: {
      active: false,
      action: "log",
    },
    xss: {
      active: false,
      action: "deny",
    },
    sqli: {
      active: false,
      action: "log",
    },
    sf: {
      active: false,
      action: "log",
    },
    java: {
      active: false,
      action: "log",
    },
  },
  rules: [
    {
      id: "<id>",
      name: "<value>",
      active: false,
      conditionGroup: [
        {
          conditions: [
            {
              type: "target_path",
              op: "gte",
            },
          ],
        },
      ],
      action: {},
    },
  ],
  ips: [
    {
      id: "<id>",
      hostname: "outlying-tennis.com",
      ip: "b07f:af97:ccfb:e92c:d9eb:dcc2:f5fb:a5f2",
      action: "bypass",
    },
  ],
  changes: [
    {},
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectKey`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `version`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `firewallEnabled`                                                                  | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `crs`                                                                              | [models.PutFirewallConfigCrs](../models/putfirewallconfigcrs.md)                   | :heavy_check_mark:                                                                 | Custom Ruleset                                                                     |
| `rules`                                                                            | [models.PutFirewallConfigRules](../models/putfirewallconfigrules.md)[]             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ips`                                                                              | [models.PutFirewallConfigIps](../models/putfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `changes`                                                                          | [models.PutFirewallConfigChanges](../models/putfirewallconfigchanges.md)[]         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `managedRules`                                                                     | [models.PutFirewallConfigManagedRules](../models/putfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |