# GetDeploymentsReadyState

In which state is the deployment.

## Example Usage

```typescript
import { GetDeploymentsReadyState } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsReadyState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED" | "DELETED"
```