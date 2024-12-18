# GetProjectsResponseBody

The paginated list of projects

## Example Usage

```typescript
import { GetProjectsResponseBody } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBody = {
  projects: [
    {
      accountId: "<id>",
      crons: {
        enabledAt: 1157.03,
        disabledAt: 5771.40,
        updatedAt: 6952.70,
        deploymentId: "<id>",
        definitions: [
          {
            host: "vercel.com",
            path: "/api/crons/sync-something?hello=world",
            schedule: "0 0 * * *",
          },
        ],
      },
      directoryListing: false,
      id: "<id>",
      latestDeployments: [
        {
          id: "<id>",
          createdAt: 6719.57,
          createdIn: "<value>",
          creator: {
            email: "Abdul_Miller96@hotmail.com",
            uid: "<id>",
            username: "Maurine.Langosh79",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "enterprise",
          previewCommentsEnabled: false,
          private: false,
          readyState: "QUEUED",
          type: "LAMBDAS",
          url: "https://broken-deduction.info",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "14.x",
      targets: {
        "key": {
          id: "<id>",
          createdAt: 8869.61,
          createdIn: "<value>",
          creator: {
            email: "Bret54@yahoo.com",
            uid: "<id>",
            username: "Richie38",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "BUILDING",
          type: "LAMBDAS",
          url: "https://juvenile-thigh.com",
          userId: "<id>",
        },
      },
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
| `projects`                                                                                                                                                      | [models.GetProjectsProjects](../models/getprojectsprojects.md)[]                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |