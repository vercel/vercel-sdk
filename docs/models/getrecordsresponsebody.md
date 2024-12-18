# GetRecordsResponseBody

Successful response retrieving a list of paginated DNS records.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `models.GetRecordsResponseBody2`

```typescript
const value: models.GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "NS",
      value: "<value>",
      creator: "<value>",
      created: 7998.65,
      updated: 3109.30,
      createdAt: 4984.35,
      updatedAt: 7017.86,
    },
  ],
};
```

### `models.ResponseBody3`

```typescript
const value: models.ResponseBody3 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "AAAA",
      value: "<value>",
      creator: "<value>",
      created: 1939.91,
      updated: 4810.42,
      createdAt: 2982.46,
      updatedAt: 8625.59,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

