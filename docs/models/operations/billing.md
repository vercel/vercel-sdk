# Billing

Billing data (interim invoicing data).


## Supported Types

### `operations.Billing1[]`

```typescript
const value: operations.Billing1[] = [
  {
    billingPlanId: "<id>",
    name: "<value>",
    price: "666.30",
    quantity: 7006.33,
    units: "<value>",
    total: "<value>",
  },
];
```

### `operations.Billing2`

```typescript
const value: operations.Billing2 = {
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "841.99",
      quantity: 6218.82,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

