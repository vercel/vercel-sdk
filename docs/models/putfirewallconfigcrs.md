# PutFirewallConfigCrs

Custom Ruleset

## Example Usage

```typescript
import { PutFirewallConfigCrs } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigCrs = {
  sd: {
    active: false,
    action: "deny",
  },
  ma: {
    active: false,
    action: "deny",
  },
  lfi: {
    active: false,
    action: "deny",
  },
  rfi: {
    active: false,
    action: "deny",
  },
  rce: {
    active: false,
    action: "deny",
  },
  php: {
    active: false,
    action: "log",
  },
  gen: {
    active: false,
    action: "log",
  },
  xss: {
    active: false,
    action: "deny",
  },
  sqli: {
    active: false,
    action: "deny",
  },
  sf: {
    active: false,
    action: "deny",
  },
  java: {
    active: false,
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sd`                                                                                                      | [models.PutFirewallConfigSd](../models/putfirewallconfigsd.md)                                            | :heavy_check_mark:                                                                                        | Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.             |
| `ma`                                                                                                      | [models.PutFirewallConfigMa](../models/putfirewallconfigma.md)                                            | :heavy_check_mark:                                                                                        | Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.         |
| `lfi`                                                                                                     | [models.PutFirewallConfigLfi](../models/putfirewallconfiglfi.md)                                          | :heavy_check_mark:                                                                                        | Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.        |
| `rfi`                                                                                                     | [models.PutFirewallConfigRfi](../models/putfirewallconfigrfi.md)                                          | :heavy_check_mark:                                                                                        | Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.                 |
| `rce`                                                                                                     | [models.PutFirewallConfigRce](../models/putfirewallconfigrce.md)                                          | :heavy_check_mark:                                                                                        | Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.                   |
| `php`                                                                                                     | [models.PutFirewallConfigPhp](../models/putfirewallconfigphp.md)                                          | :heavy_check_mark:                                                                                        | PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.                          |
| `gen`                                                                                                     | [models.PutFirewallConfigGen](../models/putfirewallconfiggen.md)                                          | :heavy_check_mark:                                                                                        | Generic Attack - Provide broad protection from various undefined or novel attack vectors.                 |
| `xss`                                                                                                     | [models.PutFirewallConfigXss](../models/putfirewallconfigxss.md)                                          | :heavy_check_mark:                                                                                        | XSS Attack - Prevent injection of malicious scripts into trusted webpages.                                |
| `sqli`                                                                                                    | [models.PutFirewallConfigSqli](../models/putfirewallconfigsqli.md)                                        | :heavy_check_mark:                                                                                        | SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.                 |
| `sf`                                                                                                      | [models.PutFirewallConfigSf](../models/putfirewallconfigsf.md)                                            | :heavy_check_mark:                                                                                        | Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs. |
| `java`                                                                                                    | [models.PutFirewallConfigJava](../models/putfirewallconfigjava.md)                                        | :heavy_check_mark:                                                                                        | Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.             |