/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * The role of the user to invite
 */
export const InviteUserToTeamRole = {
  Owner: "OWNER",
  Member: "MEMBER",
  Developer: "DEVELOPER",
  Billing: "BILLING",
  Viewer: "VIEWER",
  Contributor: "CONTRIBUTOR",
} as const;
/**
 * The role of the user to invite
 */
export type InviteUserToTeamRole = ClosedEnum<typeof InviteUserToTeamRole>;

/**
 * Sets the project roles for the invited user
 */
export const InviteUserToTeamTeamsRole = {
  Admin: "ADMIN",
  ProjectViewer: "PROJECT_VIEWER",
  ProjectDeveloper: "PROJECT_DEVELOPER",
} as const;
/**
 * Sets the project roles for the invited user
 */
export type InviteUserToTeamTeamsRole = ClosedEnum<
  typeof InviteUserToTeamTeamsRole
>;

export type InviteUserToTeamProjects = {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * Sets the project roles for the invited user
   */
  role: InviteUserToTeamTeamsRole;
};

export type InviteUserToTeamRequestBody = {
  /**
   * The id of the user to invite
   */
  uid?: string | undefined;
  /**
   * The email address of the user to invite
   */
  email?: string | undefined;
  /**
   * The role of the user to invite
   */
  role?: InviteUserToTeamRole | undefined;
  projects?: Array<InviteUserToTeamProjects> | undefined;
};

export type InviteUserToTeamRequest = {
  teamId: string;
  requestBody: InviteUserToTeamRequestBody;
};

export const InviteUserToTeamResponseBodyRole = {
  Owner: "OWNER",
  Member: "MEMBER",
  Developer: "DEVELOPER",
  Billing: "BILLING",
  Viewer: "VIEWER",
  Contributor: "CONTRIBUTOR",
} as const;
export type InviteUserToTeamResponseBodyRole = ClosedEnum<
  typeof InviteUserToTeamResponseBodyRole
>;

export type InviteUserToTeamResponseBody2 = {
  uid: string;
  username: string;
  role: InviteUserToTeamResponseBodyRole;
};

/**
 * The role used for the invitation
 */
export const ResponseBodyRole = {
  Owner: "OWNER",
  Member: "MEMBER",
  Developer: "DEVELOPER",
  Billing: "BILLING",
  Viewer: "VIEWER",
  Contributor: "CONTRIBUTOR",
} as const;
/**
 * The role used for the invitation
 */
export type ResponseBodyRole = ClosedEnum<typeof ResponseBodyRole>;

/**
 * The member was successfully added to the team
 */
export type InviteUserToTeamResponseBody1 = {
  /**
   * The ID of the invited user
   */
  uid: string;
  /**
   * The username of the invited user
   */
  username: string;
  /**
   * The email of the invited user. Not included if the user was invited via their UID.
   */
  email?: string | undefined;
  /**
   * The role used for the invitation
   */
  role: ResponseBodyRole;
};

/**
 * The member was successfully added to the team
 */
export type InviteUserToTeamResponseBody =
  | InviteUserToTeamResponseBody2
  | InviteUserToTeamResponseBody1;

/** @internal */
export const InviteUserToTeamRole$inboundSchema: z.ZodNativeEnum<
  typeof InviteUserToTeamRole
> = z.nativeEnum(InviteUserToTeamRole);

/** @internal */
export const InviteUserToTeamRole$outboundSchema: z.ZodNativeEnum<
  typeof InviteUserToTeamRole
> = InviteUserToTeamRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamRole$ {
  /** @deprecated use `InviteUserToTeamRole$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamRole$inboundSchema;
  /** @deprecated use `InviteUserToTeamRole$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamRole$outboundSchema;
}

/** @internal */
export const InviteUserToTeamTeamsRole$inboundSchema: z.ZodNativeEnum<
  typeof InviteUserToTeamTeamsRole
> = z.nativeEnum(InviteUserToTeamTeamsRole);

/** @internal */
export const InviteUserToTeamTeamsRole$outboundSchema: z.ZodNativeEnum<
  typeof InviteUserToTeamTeamsRole
> = InviteUserToTeamTeamsRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamTeamsRole$ {
  /** @deprecated use `InviteUserToTeamTeamsRole$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamTeamsRole$inboundSchema;
  /** @deprecated use `InviteUserToTeamTeamsRole$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamTeamsRole$outboundSchema;
}

/** @internal */
export const InviteUserToTeamProjects$inboundSchema: z.ZodType<
  InviteUserToTeamProjects,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectId: z.string(),
  role: InviteUserToTeamTeamsRole$inboundSchema,
});

/** @internal */
export type InviteUserToTeamProjects$Outbound = {
  projectId: string;
  role: string;
};

/** @internal */
export const InviteUserToTeamProjects$outboundSchema: z.ZodType<
  InviteUserToTeamProjects$Outbound,
  z.ZodTypeDef,
  InviteUserToTeamProjects
> = z.object({
  projectId: z.string(),
  role: InviteUserToTeamTeamsRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamProjects$ {
  /** @deprecated use `InviteUserToTeamProjects$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamProjects$inboundSchema;
  /** @deprecated use `InviteUserToTeamProjects$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamProjects$outboundSchema;
  /** @deprecated use `InviteUserToTeamProjects$Outbound` instead. */
  export type Outbound = InviteUserToTeamProjects$Outbound;
}

export function inviteUserToTeamProjectsToJSON(
  inviteUserToTeamProjects: InviteUserToTeamProjects,
): string {
  return JSON.stringify(
    InviteUserToTeamProjects$outboundSchema.parse(inviteUserToTeamProjects),
  );
}

export function inviteUserToTeamProjectsFromJSON(
  jsonString: string,
): SafeParseResult<InviteUserToTeamProjects, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteUserToTeamProjects$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteUserToTeamProjects' from JSON`,
  );
}

/** @internal */
export const InviteUserToTeamRequestBody$inboundSchema: z.ZodType<
  InviteUserToTeamRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uid: z.string().optional(),
  email: z.string().optional(),
  role: InviteUserToTeamRole$inboundSchema.default("MEMBER"),
  projects: z.array(z.lazy(() => InviteUserToTeamProjects$inboundSchema))
    .optional(),
});

/** @internal */
export type InviteUserToTeamRequestBody$Outbound = {
  uid?: string | undefined;
  email?: string | undefined;
  role: string;
  projects?: Array<InviteUserToTeamProjects$Outbound> | undefined;
};

/** @internal */
export const InviteUserToTeamRequestBody$outboundSchema: z.ZodType<
  InviteUserToTeamRequestBody$Outbound,
  z.ZodTypeDef,
  InviteUserToTeamRequestBody
> = z.object({
  uid: z.string().optional(),
  email: z.string().optional(),
  role: InviteUserToTeamRole$outboundSchema.default("MEMBER"),
  projects: z.array(z.lazy(() => InviteUserToTeamProjects$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamRequestBody$ {
  /** @deprecated use `InviteUserToTeamRequestBody$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamRequestBody$inboundSchema;
  /** @deprecated use `InviteUserToTeamRequestBody$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamRequestBody$outboundSchema;
  /** @deprecated use `InviteUserToTeamRequestBody$Outbound` instead. */
  export type Outbound = InviteUserToTeamRequestBody$Outbound;
}

export function inviteUserToTeamRequestBodyToJSON(
  inviteUserToTeamRequestBody: InviteUserToTeamRequestBody,
): string {
  return JSON.stringify(
    InviteUserToTeamRequestBody$outboundSchema.parse(
      inviteUserToTeamRequestBody,
    ),
  );
}

export function inviteUserToTeamRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<InviteUserToTeamRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteUserToTeamRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteUserToTeamRequestBody' from JSON`,
  );
}

/** @internal */
export const InviteUserToTeamRequest$inboundSchema: z.ZodType<
  InviteUserToTeamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string(),
  RequestBody: z.lazy(() => InviteUserToTeamRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type InviteUserToTeamRequest$Outbound = {
  teamId: string;
  RequestBody: InviteUserToTeamRequestBody$Outbound;
};

/** @internal */
export const InviteUserToTeamRequest$outboundSchema: z.ZodType<
  InviteUserToTeamRequest$Outbound,
  z.ZodTypeDef,
  InviteUserToTeamRequest
> = z.object({
  teamId: z.string(),
  requestBody: z.lazy(() => InviteUserToTeamRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamRequest$ {
  /** @deprecated use `InviteUserToTeamRequest$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamRequest$inboundSchema;
  /** @deprecated use `InviteUserToTeamRequest$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamRequest$outboundSchema;
  /** @deprecated use `InviteUserToTeamRequest$Outbound` instead. */
  export type Outbound = InviteUserToTeamRequest$Outbound;
}

export function inviteUserToTeamRequestToJSON(
  inviteUserToTeamRequest: InviteUserToTeamRequest,
): string {
  return JSON.stringify(
    InviteUserToTeamRequest$outboundSchema.parse(inviteUserToTeamRequest),
  );
}

export function inviteUserToTeamRequestFromJSON(
  jsonString: string,
): SafeParseResult<InviteUserToTeamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteUserToTeamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteUserToTeamRequest' from JSON`,
  );
}

/** @internal */
export const InviteUserToTeamResponseBodyRole$inboundSchema: z.ZodNativeEnum<
  typeof InviteUserToTeamResponseBodyRole
> = z.nativeEnum(InviteUserToTeamResponseBodyRole);

/** @internal */
export const InviteUserToTeamResponseBodyRole$outboundSchema: z.ZodNativeEnum<
  typeof InviteUserToTeamResponseBodyRole
> = InviteUserToTeamResponseBodyRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamResponseBodyRole$ {
  /** @deprecated use `InviteUserToTeamResponseBodyRole$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamResponseBodyRole$inboundSchema;
  /** @deprecated use `InviteUserToTeamResponseBodyRole$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamResponseBodyRole$outboundSchema;
}

/** @internal */
export const InviteUserToTeamResponseBody2$inboundSchema: z.ZodType<
  InviteUserToTeamResponseBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  uid: z.string(),
  username: z.string(),
  role: InviteUserToTeamResponseBodyRole$inboundSchema,
});

/** @internal */
export type InviteUserToTeamResponseBody2$Outbound = {
  uid: string;
  username: string;
  role: string;
};

/** @internal */
export const InviteUserToTeamResponseBody2$outboundSchema: z.ZodType<
  InviteUserToTeamResponseBody2$Outbound,
  z.ZodTypeDef,
  InviteUserToTeamResponseBody2
> = z.object({
  uid: z.string(),
  username: z.string(),
  role: InviteUserToTeamResponseBodyRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamResponseBody2$ {
  /** @deprecated use `InviteUserToTeamResponseBody2$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamResponseBody2$inboundSchema;
  /** @deprecated use `InviteUserToTeamResponseBody2$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamResponseBody2$outboundSchema;
  /** @deprecated use `InviteUserToTeamResponseBody2$Outbound` instead. */
  export type Outbound = InviteUserToTeamResponseBody2$Outbound;
}

export function inviteUserToTeamResponseBody2ToJSON(
  inviteUserToTeamResponseBody2: InviteUserToTeamResponseBody2,
): string {
  return JSON.stringify(
    InviteUserToTeamResponseBody2$outboundSchema.parse(
      inviteUserToTeamResponseBody2,
    ),
  );
}

export function inviteUserToTeamResponseBody2FromJSON(
  jsonString: string,
): SafeParseResult<InviteUserToTeamResponseBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteUserToTeamResponseBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteUserToTeamResponseBody2' from JSON`,
  );
}

/** @internal */
export const ResponseBodyRole$inboundSchema: z.ZodNativeEnum<
  typeof ResponseBodyRole
> = z.nativeEnum(ResponseBodyRole);

/** @internal */
export const ResponseBodyRole$outboundSchema: z.ZodNativeEnum<
  typeof ResponseBodyRole
> = ResponseBodyRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyRole$ {
  /** @deprecated use `ResponseBodyRole$inboundSchema` instead. */
  export const inboundSchema = ResponseBodyRole$inboundSchema;
  /** @deprecated use `ResponseBodyRole$outboundSchema` instead. */
  export const outboundSchema = ResponseBodyRole$outboundSchema;
}

/** @internal */
export const InviteUserToTeamResponseBody1$inboundSchema: z.ZodType<
  InviteUserToTeamResponseBody1,
  z.ZodTypeDef,
  unknown
> = z.object({
  uid: z.string(),
  username: z.string(),
  email: z.string().optional(),
  role: ResponseBodyRole$inboundSchema,
});

/** @internal */
export type InviteUserToTeamResponseBody1$Outbound = {
  uid: string;
  username: string;
  email?: string | undefined;
  role: string;
};

/** @internal */
export const InviteUserToTeamResponseBody1$outboundSchema: z.ZodType<
  InviteUserToTeamResponseBody1$Outbound,
  z.ZodTypeDef,
  InviteUserToTeamResponseBody1
> = z.object({
  uid: z.string(),
  username: z.string(),
  email: z.string().optional(),
  role: ResponseBodyRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamResponseBody1$ {
  /** @deprecated use `InviteUserToTeamResponseBody1$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamResponseBody1$inboundSchema;
  /** @deprecated use `InviteUserToTeamResponseBody1$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamResponseBody1$outboundSchema;
  /** @deprecated use `InviteUserToTeamResponseBody1$Outbound` instead. */
  export type Outbound = InviteUserToTeamResponseBody1$Outbound;
}

export function inviteUserToTeamResponseBody1ToJSON(
  inviteUserToTeamResponseBody1: InviteUserToTeamResponseBody1,
): string {
  return JSON.stringify(
    InviteUserToTeamResponseBody1$outboundSchema.parse(
      inviteUserToTeamResponseBody1,
    ),
  );
}

export function inviteUserToTeamResponseBody1FromJSON(
  jsonString: string,
): SafeParseResult<InviteUserToTeamResponseBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteUserToTeamResponseBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteUserToTeamResponseBody1' from JSON`,
  );
}

/** @internal */
export const InviteUserToTeamResponseBody$inboundSchema: z.ZodType<
  InviteUserToTeamResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => InviteUserToTeamResponseBody2$inboundSchema),
  z.lazy(() => InviteUserToTeamResponseBody1$inboundSchema),
]);

/** @internal */
export type InviteUserToTeamResponseBody$Outbound =
  | InviteUserToTeamResponseBody2$Outbound
  | InviteUserToTeamResponseBody1$Outbound;

/** @internal */
export const InviteUserToTeamResponseBody$outboundSchema: z.ZodType<
  InviteUserToTeamResponseBody$Outbound,
  z.ZodTypeDef,
  InviteUserToTeamResponseBody
> = z.union([
  z.lazy(() => InviteUserToTeamResponseBody2$outboundSchema),
  z.lazy(() => InviteUserToTeamResponseBody1$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserToTeamResponseBody$ {
  /** @deprecated use `InviteUserToTeamResponseBody$inboundSchema` instead. */
  export const inboundSchema = InviteUserToTeamResponseBody$inboundSchema;
  /** @deprecated use `InviteUserToTeamResponseBody$outboundSchema` instead. */
  export const outboundSchema = InviteUserToTeamResponseBody$outboundSchema;
  /** @deprecated use `InviteUserToTeamResponseBody$Outbound` instead. */
  export type Outbound = InviteUserToTeamResponseBody$Outbound;
}

export function inviteUserToTeamResponseBodyToJSON(
  inviteUserToTeamResponseBody: InviteUserToTeamResponseBody,
): string {
  return JSON.stringify(
    InviteUserToTeamResponseBody$outboundSchema.parse(
      inviteUserToTeamResponseBody,
    ),
  );
}

export function inviteUserToTeamResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<InviteUserToTeamResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InviteUserToTeamResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InviteUserToTeamResponseBody' from JSON`,
  );
}