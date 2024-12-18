# GitSource

Defines the Git Repository source to be deployed. This property can not be used in combination with `files`.


## Supported Types

### `models.GitSource1`

```typescript
const value: models.GitSource1 = {
  ref: "<value>",
  repoId: 3203.26,
  type: "github",
};
```

### `models.GitSource2`

```typescript
const value: models.GitSource2 = {
  org: "<value>",
  ref: "<value>",
  repo: "<value>",
  type: "github",
};
```

### `models.Three`

```typescript
const value: models.Three = {
  projectId: "<id>",
  ref: "<value>",
  type: "gitlab",
};
```

### `models.Four`

```typescript
const value: models.Four = {
  ref: "<value>",
  repoUuid: "<id>",
  type: "bitbucket",
};
```

### `models.Five`

```typescript
const value: models.Five = {
  owner: "<value>",
  ref: "<value>",
  slug: "<value>",
  type: "bitbucket",
};
```

