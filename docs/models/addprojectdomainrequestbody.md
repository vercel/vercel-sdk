# AddProjectDomainRequestBody

## Example Usage

```typescript
import { AddProjectDomainRequestBody } from "@vercel/sdk/models/addprojectdomainop.js";

let value: AddProjectDomainRequestBody = {
  name: "www.example.com",
  gitBranch: null,
  redirect: "foobar.com",
  redirectStatusCode: 307,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The project domain name                                                                      | www.example.com                                                                              |
| `gitBranch`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | Git branch to link the project domain                                                        | <nil>                                                                                        |
| `redirect`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Target destination domain for redirect                                                       | foobar.com                                                                                   |
| `redirectStatusCode`                                                                         | [models.AddProjectDomainRedirectStatusCode](../models/addprojectdomainredirectstatuscode.md) | :heavy_minus_sign:                                                                           | Status code for domain redirect                                                              | 307                                                                                          |