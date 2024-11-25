# ReadySubstate

Since June 2023 Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - PROMOTED: has seen production traffic

## Example Usage

```typescript
import { ReadySubstate } from "@vercel/sdk/models/operations/createdeployment.js";

let value: ReadySubstate = "PROMOTED";
```

## Values

```typescript
"STAGED" | "PROMOTED"
```