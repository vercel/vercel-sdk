# PatchTeamRemoteCaching

Whether or not remote caching is enabled for the team

## Example Usage

```typescript
import { PatchTeamRemoteCaching } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamRemoteCaching = {
  enabled: true,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `enabled`                                      | *boolean*                                      | :heavy_minus_sign:                             | Enable or disable remote caching for the team. | true                                           |