# CreateTeamBilling

IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated.

## Example Usage

```typescript
import { CreateTeamBilling } from "@vercel/sdk/models/operations/createteam.js";

let value: CreateTeamBilling = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |