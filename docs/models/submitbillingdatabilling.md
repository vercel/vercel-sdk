# SubmitBillingDataBilling

Billing data (interim invoicing data).


## Supported Types

### `models.Billing1[]`

```typescript
const value: models.Billing1[] = [
  {
    billingPlanId: "<id>",
    name: "<value>",
    price: "748.90",
    quantity: 2780.50,
    units: "<value>",
    total: "<value>",
  },
];
```

### `models.Billing2`

```typescript
const value: models.Billing2 = {
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "547.42",
      quantity: 2261.96,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

