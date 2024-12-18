# GetProjectDomainsResponseBody

Successful response retrieving a list of domains

## Example Usage

```typescript
import { GetProjectDomainsResponseBody } from "@vercel/sdk/models/getprojectdomainsop.js";

let value: GetProjectDomainsResponseBody = {
  domains: [
    {
      name: "<value>",
      apexName: "<value>",
      projectId: "<id>",
      verified: false,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                                                                       | [models.GetProjectDomainsDomains](../models/getprojectdomainsdomains.md)[]                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |