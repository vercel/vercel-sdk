# UpdateFirewallConfigRequestBody


## Supported Types

### `models.UpdateFirewallConfigRequestBody1`

```typescript
const value: models.UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: false,
};
```

### `models.UpdateFirewallConfigRequestBody2`

```typescript
const value: models.UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "host",
            op: "lte",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `models.UpdateFirewallConfigRequestBody3`

```typescript
const value: models.UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "ja4_digest",
            op: "suf",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `models.UpdateFirewallConfigRequestBody4`

```typescript
const value: models.UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody5`

```typescript
const value: models.UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
  value: 170.30,
};
```

### `models.RequestBody6`

```typescript
const value: models.RequestBody6 = {
  action: "crs.update",
  id: "rce",
  value: {
    active: false,
    action: "log",
  },
};
```

### `models.RequestBody7`

```typescript
const value: models.RequestBody7 = {
  action: "crs.disable",
};
```

### `models.RequestBody8`

```typescript
const value: models.RequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "responsible-coast.info",
    ip: "b0d5:28c0:cbb9:cad8:df0b:8eaf:f4ec:5adf",
    action: "challenge",
  },
};
```

### `models.RequestBody9`

```typescript
const value: models.RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "cruel-extension.biz",
    ip: "ae4c:fbeb:6664:dca8:e4c1:4dec:dfaa:c2fb",
    action: "deny",
  },
};
```

### `models.RequestBody10`

```typescript
const value: models.RequestBody10 = {
  action: "ip.remove",
  id: "<id>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  action: "managedRules.update",
  id: "owasp",
  value: {
    active: false,
  },
};
```

