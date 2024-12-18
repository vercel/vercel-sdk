# RequestBodyOp

[Operator](https://vercel.com/docs/security/vercel-waf/rule-configuration#operators) used to compare the parameter with a value.

## Example Usage

```typescript
import { RequestBodyOp } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBodyOp = "ninc";
```

## Values

```typescript
"re" | "eq" | "neq" | "ex" | "nex" | "inc" | "ninc" | "pre" | "suf" | "sub" | "gt" | "gte" | "lt" | "lte"
```