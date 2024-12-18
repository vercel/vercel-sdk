# GetFirewallConfigCrs

Custom Ruleset

## Example Usage

```typescript
import { GetFirewallConfigCrs } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigCrs = {
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
    action: "log",
  },
  sf: {
    active: false,
    action: "deny",
  },
  java: {
    active: false,
    action: "log",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sd`                                                                                                      | [models.GetFirewallConfigSd](../models/getfirewallconfigsd.md)                                            | :heavy_check_mark:                                                                                        | Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.             |
| `ma`                                                                                                      | [models.GetFirewallConfigMa](../models/getfirewallconfigma.md)                                            | :heavy_check_mark:                                                                                        | Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.         |
| `lfi`                                                                                                     | [models.GetFirewallConfigLfi](../models/getfirewallconfiglfi.md)                                          | :heavy_check_mark:                                                                                        | Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.        |
| `rfi`                                                                                                     | [models.GetFirewallConfigRfi](../models/getfirewallconfigrfi.md)                                          | :heavy_check_mark:                                                                                        | Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.                 |
| `rce`                                                                                                     | [models.GetFirewallConfigRce](../models/getfirewallconfigrce.md)                                          | :heavy_check_mark:                                                                                        | Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.                   |
| `php`                                                                                                     | [models.GetFirewallConfigPhp](../models/getfirewallconfigphp.md)                                          | :heavy_check_mark:                                                                                        | PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.                          |
| `gen`                                                                                                     | [models.GetFirewallConfigGen](../models/getfirewallconfiggen.md)                                          | :heavy_check_mark:                                                                                        | Generic Attack - Provide broad protection from various undefined or novel attack vectors.                 |
| `xss`                                                                                                     | [models.GetFirewallConfigXss](../models/getfirewallconfigxss.md)                                          | :heavy_check_mark:                                                                                        | XSS Attack - Prevent injection of malicious scripts into trusted webpages.                                |
| `sqli`                                                                                                    | [models.GetFirewallConfigSqli](../models/getfirewallconfigsqli.md)                                        | :heavy_check_mark:                                                                                        | SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.                 |
| `sf`                                                                                                      | [models.GetFirewallConfigSf](../models/getfirewallconfigsf.md)                                            | :heavy_check_mark:                                                                                        | Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs. |
| `java`                                                                                                    | [models.GetFirewallConfigJava](../models/getfirewallconfigjava.md)                                        | :heavy_check_mark:                                                                                        | Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.             |