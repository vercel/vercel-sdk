# GetFirewallConfigResponseBody

## Example Usage

```typescript
import { GetFirewallConfigResponseBody } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigResponseBody = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 7733.32,
  updatedAt: "<value>",
  firewallEnabled: false,
  crs: {
    sd: {
      active: false,
      action: "deny",
    },
    ma: {
      active: false,
      action: "log",
    },
    lfi: {
      active: false,
      action: "log",
    },
    rfi: {
      active: false,
      action: "log",
    },
    rce: {
      active: false,
      action: "log",
    },
    php: {
      active: false,
      action: "deny",
    },
    gen: {
      active: false,
      action: "log",
    },
    xss: {
      active: false,
      action: "log",
    },
    sqli: {
      active: false,
      action: "log",
    },
    sf: {
      active: false,
      action: "deny",
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
              type: "region",
              op: "eq",
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
      hostname: "lanky-sundae.info",
      ip: "156.254.209.158",
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
| `crs`                                                                              | [models.GetFirewallConfigCrs](../models/getfirewallconfigcrs.md)                   | :heavy_check_mark:                                                                 | Custom Ruleset                                                                     |
| `rules`                                                                            | [models.GetFirewallConfigRules](../models/getfirewallconfigrules.md)[]             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ips`                                                                              | [models.GetFirewallConfigIps](../models/getfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `changes`                                                                          | [models.Changes](../models/changes.md)[]                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `managedRules`                                                                     | [models.GetFirewallConfigManagedRules](../models/getfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |