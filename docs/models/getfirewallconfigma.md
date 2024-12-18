# GetFirewallConfigMa

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

## Example Usage

```typescript
import { GetFirewallConfigMa } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigMa = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                     | *boolean*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `action`                                                                                                                                                                     | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsMaAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrsmaaction.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |