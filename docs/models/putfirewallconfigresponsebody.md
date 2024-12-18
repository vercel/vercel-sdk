# PutFirewallConfigResponseBody

## Example Usage

```typescript
import { PutFirewallConfigResponseBody } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigResponseBody = {
  active: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 8453.74,
    updatedAt: "<value>",
    firewallEnabled: false,
    crs: {
      sd: {
        active: false,
        action: "log",
      },
      ma: {
        active: false,
        action: "deny",
      },
      lfi: {
        active: false,
        action: "deny",
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
        action: "deny",
      },
      sqli: {
        active: false,
        action: "deny",
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
                type: "environment",
                op: "lte",
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
        hostname: "buttery-fun.org",
        ip: "42.160.159.214",
        action: "bypass",
      },
    ],
    changes: [
      {},
    ],
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `active`                             | [models.Active](../models/active.md) | :heavy_check_mark:                   | N/A                                  |