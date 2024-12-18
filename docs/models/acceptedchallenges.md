# AcceptedChallenges

Which challenge types the domain can use for issuing certs.

## Example Usage

```typescript
import { AcceptedChallenges } from "@vercel/sdk/models/getdomainconfigop.js";

let value: AcceptedChallenges = "http-01";
```

## Values

```typescript
"dns-01" | "http-01"
```