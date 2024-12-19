# AuthUser

Data for the currently authenticated User.

## Example Usage

```typescript
import { AuthUser } from "@vercel/sdk/models/authuser.js";

let value: AuthUser = {
  createdAt: 1630748523395,
  softBlock: {
    blockedAt: 9270.21,
    reason: "SUBSCRIPTION_CANCELED",
  },
  billing: {},
  resourceConfig: {},
  stagingPrefix: "<value>",
  hasTrialAvailable: false,
  id: "AEIIDYVk59zbFF2Sxfyxxmua",
  email: "me@example.com",
  name: "John Doe",
  username: "jdoe",
  avatar: "22cb30c85ff45ac4c72de8981500006b28114aa1",
  defaultTeamId: "<id>",
  version: "northstar",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                                                      | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | UNIX timestamp (in milliseconds) when the User account was created.                                                                              | 1630748523395                                                                                                                                    |
| `softBlock`                                                                                                                                      | [models.SoftBlock](../models/softblock.md)                                                                                                       | :heavy_check_mark:                                                                                                                               | When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why. |                                                                                                                                                  |
| `billing`                                                                                                                                        | [models.Billing](../models/billing.md)                                                                                                           | :heavy_check_mark:                                                                                                                               | An object containing billing infomation associated with the User account.                                                                        |                                                                                                                                                  |
| `resourceConfig`                                                                                                                                 | [models.ResourceConfig](../models/resourceconfig.md)                                                                                             | :heavy_check_mark:                                                                                                                               | An object containing infomation related to the amount of platform resources may be allocated to the User account.                                |                                                                                                                                                  |
| `stagingPrefix`                                                                                                                                  | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Prefix that will be used in the URL of "Preview" deployments created by the User account.                                                        |                                                                                                                                                  |
| `activeDashboardViews`                                                                                                                           | [models.ActiveDashboardViews](../models/activedashboardviews.md)[]                                                                               | :heavy_minus_sign:                                                                                                                               | set of dashboard view preferences (cards or list) per scopeId                                                                                    |                                                                                                                                                  |
| `importFlowGitNamespace`                                                                                                                         | *models.ImportFlowGitNamespace*                                                                                                                  | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |                                                                                                                                                  |
| `importFlowGitNamespaceId`                                                                                                                       | *models.ImportFlowGitNamespaceId*                                                                                                                | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |                                                                                                                                                  |
| `importFlowGitProvider`                                                                                                                          | [models.ImportFlowGitProvider](../models/importflowgitprovider.md)                                                                               | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |                                                                                                                                                  |
| `preferredScopesAndGitNamespaces`                                                                                                                | [models.PreferredScopesAndGitNamespaces](../models/preferredscopesandgitnamespaces.md)[]                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |                                                                                                                                                  |
| `dismissedToasts`                                                                                                                                | [models.DismissedToasts](../models/dismissedtoasts.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                               | A record of when, under a certain scopeId, a toast was dismissed                                                                                 |                                                                                                                                                  |
| `favoriteProjectsAndSpaces`                                                                                                                      | *models.FavoriteProjectsAndSpaces*[]                                                                                                             | :heavy_minus_sign:                                                                                                                               | A list of projects and spaces across teams that a user has marked as a favorite.                                                                 |                                                                                                                                                  |
| `hasTrialAvailable`                                                                                                                              | *boolean*                                                                                                                                        | :heavy_check_mark:                                                                                                                               | Whether the user has a trial available for a paid plan subscription.                                                                             |                                                                                                                                                  |
| `remoteCaching`                                                                                                                                  | [models.RemoteCaching](../models/remotecaching.md)                                                                                               | :heavy_minus_sign:                                                                                                                               | remote caching settings                                                                                                                          |                                                                                                                                                  |
| `dataCache`                                                                                                                                      | [models.DataCache](../models/datacache.md)                                                                                                       | :heavy_minus_sign:                                                                                                                               | data cache settings                                                                                                                              |                                                                                                                                                  |
| `featureBlocks`                                                                                                                                  | [models.FeatureBlocks](../models/featureblocks.md)                                                                                               | :heavy_minus_sign:                                                                                                                               | Feature blocks for the user                                                                                                                      |                                                                                                                                                  |
| `northstarMigration`                                                                                                                             | [models.NorthstarMigration](../models/northstarmigration.md)                                                                                     | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |                                                                                                                                                  |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The User's unique identifier.                                                                                                                    | AEIIDYVk59zbFF2Sxfyxxmua                                                                                                                         |
| `email`                                                                                                                                          | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Email address associated with the User account.                                                                                                  | me@example.com                                                                                                                                   |
| `name`                                                                                                                                           | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Name associated with the User account, or `null` if none has been provided.                                                                      | John Doe                                                                                                                                         |
| `username`                                                                                                                                       | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Unique username associated with the User account.                                                                                                | jdoe                                                                                                                                             |
| `avatar`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.                      | 22cb30c85ff45ac4c72de8981500006b28114aa1                                                                                                         |
| `defaultTeamId`                                                                                                                                  | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The user's default team. Only applies if the user's `version` is `'northstar'`.                                                                  |                                                                                                                                                  |
| `version`                                                                                                                                        | [models.Version](../models/version.md)                                                                                                           | :heavy_check_mark:                                                                                                                               | The user's version. Will either be unset or `northstar`.                                                                                         |                                                                                                                                                  |