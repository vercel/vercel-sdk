# GetFirewallConfigType

[Parameter](https://vercel.com/docs/security/vercel-waf/rule-configuration#parameters) from the incoming traffic.

## Example Usage

```typescript
import { GetFirewallConfigType } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigType = "header";
```

## Values

```typescript
"host" | "path" | "method" | "header" | "query" | "cookie" | "target_path" | "raw_path" | "ip_address" | "protocol" | "region" | "scheme" | "environment" | "user_agent" | "geo_continent" | "geo_country" | "geo_country_region" | "geo_city" | "geo_as_number" | "ja4_digest" | "ja3_digest" | "rate_limit_api_id"
```