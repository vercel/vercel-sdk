# GetFirewallConfigJava

Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.

## Example Usage

```typescript
import { GetFirewallConfigJava } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigJava = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                         | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `action`                                                                                                                                                                         | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrsjavaaction.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |