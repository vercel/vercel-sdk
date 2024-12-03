# UpdateFirewallConfigRequestBody


## Supported Types

### `operations.UpdateFirewallConfigRequestBody1`

```typescript
const value: operations.UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: false,
};
```

### `operations.UpdateFirewallConfigRequestBody2`

```typescript
const value: operations.UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "cookie",
            op: "lte",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `operations.UpdateFirewallConfigRequestBody3`

```typescript
const value: operations.UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "ip_address",
            op: "lt",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `operations.UpdateFirewallConfigRequestBody4`

```typescript
const value: operations.UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
};
```

### `operations.UpdateFirewallConfigRequestBody5`

```typescript
const value: operations.UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
  value: 1810.42,
};
```

### `operations.RequestBody6`

```typescript
const value: operations.RequestBody6 = {
  action: "crs.update",
  id: "sqli",
  value: {
    active: false,
    action: "deny",
  },
};
```

### `operations.RequestBody7`

```typescript
const value: operations.RequestBody7 = {
  action: "crs.disable",
};
```

### `operations.RequestBody8`

```typescript
const value: operations.RequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "lean-accompanist.net",
    ip: "0eb7:d692:e0af:c3af:cc2d:8d6c:9d51:a9c0",
    action: "bypass",
  },
};
```

### `operations.RequestBody9`

```typescript
const value: operations.RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "ultimate-opera.com",
    ip: "250.174.41.117",
    action: "bypass",
  },
};
```

### `operations.RequestBody10`

```typescript
const value: operations.RequestBody10 = {
  action: "ip.remove",
  id: "<id>",
};
```

### `operations.Eleven`

```typescript
const value: operations.Eleven = {
  action: "managedRules.update",
  id: "owasp",
  value: {
    active: false,
  },
};
```

