# PutFirewallConfigJava

Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.

## Example Usage

```typescript
import { PutFirewallConfigJava } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigJava = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                     | *boolean*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `action`                                                                                                                                                                                     | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsJavaAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsjavaaction.md) | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |