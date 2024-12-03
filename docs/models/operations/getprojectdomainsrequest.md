# GetProjectDomainsRequest

## Example Usage

```typescript
import { GetProjectDomainsRequest } from "@vercel/sdk/models/operations/getprojectdomains.js";

let value: GetProjectDomainsRequest = {
  idOrName: "<value>",
  redirect: "example.com",
  limit: 20,
  since: 1609499532000,
  until: 1612264332000,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `idOrName`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The unique project identifier or the project name                                                            |                                                                                                              |
| `production`                                                                                                 | [operations.Production](../../models/operations/production.md)                                               | :heavy_minus_sign:                                                                                           | Filters only production domains when set to `true`.                                                          |                                                                                                              |
| `target`                                                                                                     | [operations.QueryParamTarget](../../models/operations/queryparamtarget.md)                                   | :heavy_minus_sign:                                                                                           | Filters on the target of the domain. Can be either \"production\", \"preview\"                               |                                                                                                              |
| `gitBranch`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Filters domains based on specific branch.                                                                    |                                                                                                              |
| `redirects`                                                                                                  | [operations.Redirects](../../models/operations/redirects.md)                                                 | :heavy_minus_sign:                                                                                           | Excludes redirect project domains when \"false\". Includes redirect project domains when \"true\" (default). |                                                                                                              |
| `redirect`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Filters domains based on their redirect target.                                                              | example.com                                                                                                  |
| `verified`                                                                                                   | [operations.Verified](../../models/operations/verified.md)                                                   | :heavy_minus_sign:                                                                                           | Filters domains based on their verification status.                                                          |                                                                                                              |
| `limit`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Maximum number of domains to list from a request (max 100).                                                  | 20                                                                                                           |
| `since`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Get domains created after this JavaScript timestamp.                                                         | 1609499532000                                                                                                |
| `until`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Get domains created before this JavaScript timestamp.                                                        | 1612264332000                                                                                                |
| `order`                                                                                                      | [operations.Order](../../models/operations/order.md)                                                         | :heavy_minus_sign:                                                                                           | Domains sort order by createdAt                                                                              |                                                                                                              |
| `teamId`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The Team identifier to perform the request on behalf of.                                                     |                                                                                                              |
| `slug`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The Team slug to perform the request on behalf of.                                                           |                                                                                                              |