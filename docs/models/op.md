# Op

[Operator](https://vercel.com/docs/security/vercel-waf/rule-configuration#operators) used to compare the parameter with a value.

## Example Usage

```typescript
import { Op } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Op = "suf";
```

## Values

```typescript
"re" | "eq" | "neq" | "ex" | "nex" | "inc" | "ninc" | "pre" | "suf" | "sub" | "gt" | "gte" | "lt" | "lte"
```