# UpdateAccessGroupRole

The project role that will be added to this Access Group. \"null\" will remove this project level role.

## Example Usage

```typescript
import { UpdateAccessGroupRole } from "@vercel/sdk/models/updateaccessgroupop.js";

let value: UpdateAccessGroupRole = "ADMIN";
```

## Values

```typescript
"ADMIN" | "PROJECT_VIEWER" | "PROJECT_DEVELOPER"
```