# RequestBodyType

The type of record, it could be one of the valid DNS records.

## Example Usage

```typescript
import { RequestBodyType } from "@vercel/sdk/models/createrecordop.js";

let value: RequestBodyType = "CAA";
```

## Values

```typescript
"A" | "AAAA" | "ALIAS" | "CAA" | "CNAME" | "HTTPS" | "MX" | "SRV" | "TXT" | "NS"
```