# PutFirewallConfigResponseBody

## Example Usage

```typescript
import { PutFirewallConfigResponseBody } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: PutFirewallConfigResponseBody = {
  active: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 780.75,
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
        action: "log",
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
        action: "deny",
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
                type: "geo_city",
                op: "suf",
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
        hostname: "whole-ectoderm.biz",
        ip: "146.229.45.71",
        action: "challenge",
      },
    ],
    changes: [
      {},
    ],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `active`                                               | [operations.Active](../../models/operations/active.md) | :heavy_check_mark:                                     | N/A                                                    |