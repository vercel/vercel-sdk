# CreateProjectEnvRequestBody


## Supported Types

### `models.CreateProjectEnvRequestBody1`

```typescript
const value: models.CreateProjectEnvRequestBody1 = {
  key: "API_URL",
  value: "https://api.vercel.com",
  type: "plain",
  target: [
    "preview",
  ],
  gitBranch: "feature-1",
  comment: "database connection string for production",
};
```

### `models.CreateProjectEnvRequestBody2[]`

```typescript
const value: models.CreateProjectEnvRequestBody2[] = [
  {
    key: "API_URL",
    value: "https://api.vercel.com",
    type: "plain",
    target: [
      "preview",
    ],
    gitBranch: "feature-1",
    comment: "database connection string for production",
  },
];
```

