# CreateProjectTargets

## Example Usage

```typescript
import { CreateProjectTargets } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectTargets = {
  id: "<id>",
  createdAt: 1000.14,
  createdIn: "<value>",
  creator: {
    email: "Annabel55@gmail.com",
    uid: "<id>",
    username: "Jaclyn.Dooley",
  },
  deploymentHostname: "<value>",
  name: "<value>",
  plan: "hobby",
  previewCommentsEnabled: false,
  private: false,
  readyState: "READY",
  type: "LAMBDAS",
  url: "https://ambitious-teammate.info",
  userId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `alias`                                                                                                                        | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `aliasAssigned`                                                                                                                | *models.CreateProjectProjectsAliasAssigned*                                                                                    | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `aliasError`                                                                                                                   | [models.CreateProjectProjectsAliasError](../models/createprojectprojectsaliaserror.md)                                         | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `aliasFinal`                                                                                                                   | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `automaticAliases`                                                                                                             | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `branchMatcher`                                                                                                                | [models.CreateProjectProjectsBranchMatcher](../models/createprojectprojectsbranchmatcher.md)                                   | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `buildingAt`                                                                                                                   | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `builds`                                                                                                                       | [models.CreateProjectProjectsBuilds](../models/createprojectprojectsbuilds.md)[]                                               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `checksConclusion`                                                                                                             | [models.CreateProjectProjectsChecksConclusion](../models/createprojectprojectschecksconclusion.md)                             | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `checksState`                                                                                                                  | [models.CreateProjectProjectsChecksState](../models/createprojectprojectschecksstate.md)                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `connectBuildsEnabled`                                                                                                         | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `connectConfigurationId`                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `createdAt`                                                                                                                    | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `createdIn`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `creator`                                                                                                                      | [models.CreateProjectProjectsCreator](../models/createprojectprojectscreator.md)                                               | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `deletedAt`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `deploymentHostname`                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `forced`                                                                                                                       | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `meta`                                                                                                                         | Record<string, *string*>                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `monorepoManager`                                                                                                              | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `oidcTokenClaims`                                                                                                              | [models.CreateProjectProjectsOidcTokenClaims](../models/createprojectprojectsoidctokenclaims.md)                               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `plan`                                                                                                                         | [models.CreateProjectProjectsPlan](../models/createprojectprojectsplan.md)                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `previewCommentsEnabled`                                                                                                       | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Whether or not preview comments are enabled for the deployment                                                                 | false                                                                                                                          |
| `private`                                                                                                                      | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `readyAt`                                                                                                                      | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `readyState`                                                                                                                   | [models.CreateProjectProjectsReadyState](../models/createprojectprojectsreadystate.md)                                         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `readySubstate`                                                                                                                | [models.CreateProjectProjectsReadySubstate](../models/createprojectprojectsreadysubstate.md)                                   | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `requestedAt`                                                                                                                  | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `target`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `teamId`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `type`                                                                                                                         | [models.CreateProjectProjectsResponse200ApplicationJSONType](../models/createprojectprojectsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `url`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `userId`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `withCache`                                                                                                                    | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |