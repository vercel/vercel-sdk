/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Provider = {
  Github: "github",
  GithubCustomHost: "github-custom-host",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type Provider = ClosedEnum<typeof Provider>;

export type GitNamespacesRequest = {
  /**
   * The custom Git host if using a custom Git provider, like GitHub Enterprise Server
   */
  host?: string | undefined;
  provider?: Provider | undefined;
};

export type GitNamespacesId = string | number;

export type GitNamespacesResponseBody = {
  provider: string;
  slug: string;
  id: string | number;
  ownerType: string;
  name?: string | undefined;
  isAccessRestricted?: boolean | undefined;
  installationId?: number | undefined;
  requireReauth?: boolean | undefined;
};

/** @internal */
export const Provider$inboundSchema: z.ZodNativeEnum<typeof Provider> = z
  .nativeEnum(Provider);

/** @internal */
export const Provider$outboundSchema: z.ZodNativeEnum<typeof Provider> =
  Provider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Provider$ {
  /** @deprecated use `Provider$inboundSchema` instead. */
  export const inboundSchema = Provider$inboundSchema;
  /** @deprecated use `Provider$outboundSchema` instead. */
  export const outboundSchema = Provider$outboundSchema;
}

/** @internal */
export const GitNamespacesRequest$inboundSchema: z.ZodType<
  GitNamespacesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  host: z.string().optional(),
  provider: Provider$inboundSchema.optional(),
});

/** @internal */
export type GitNamespacesRequest$Outbound = {
  host?: string | undefined;
  provider?: string | undefined;
};

/** @internal */
export const GitNamespacesRequest$outboundSchema: z.ZodType<
  GitNamespacesRequest$Outbound,
  z.ZodTypeDef,
  GitNamespacesRequest
> = z.object({
  host: z.string().optional(),
  provider: Provider$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitNamespacesRequest$ {
  /** @deprecated use `GitNamespacesRequest$inboundSchema` instead. */
  export const inboundSchema = GitNamespacesRequest$inboundSchema;
  /** @deprecated use `GitNamespacesRequest$outboundSchema` instead. */
  export const outboundSchema = GitNamespacesRequest$outboundSchema;
  /** @deprecated use `GitNamespacesRequest$Outbound` instead. */
  export type Outbound = GitNamespacesRequest$Outbound;
}

export function gitNamespacesRequestToJSON(
  gitNamespacesRequest: GitNamespacesRequest,
): string {
  return JSON.stringify(
    GitNamespacesRequest$outboundSchema.parse(gitNamespacesRequest),
  );
}

export function gitNamespacesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GitNamespacesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GitNamespacesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GitNamespacesRequest' from JSON`,
  );
}

/** @internal */
export const GitNamespacesId$inboundSchema: z.ZodType<
  GitNamespacesId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type GitNamespacesId$Outbound = string | number;

/** @internal */
export const GitNamespacesId$outboundSchema: z.ZodType<
  GitNamespacesId$Outbound,
  z.ZodTypeDef,
  GitNamespacesId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitNamespacesId$ {
  /** @deprecated use `GitNamespacesId$inboundSchema` instead. */
  export const inboundSchema = GitNamespacesId$inboundSchema;
  /** @deprecated use `GitNamespacesId$outboundSchema` instead. */
  export const outboundSchema = GitNamespacesId$outboundSchema;
  /** @deprecated use `GitNamespacesId$Outbound` instead. */
  export type Outbound = GitNamespacesId$Outbound;
}

export function gitNamespacesIdToJSON(
  gitNamespacesId: GitNamespacesId,
): string {
  return JSON.stringify(GitNamespacesId$outboundSchema.parse(gitNamespacesId));
}

export function gitNamespacesIdFromJSON(
  jsonString: string,
): SafeParseResult<GitNamespacesId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GitNamespacesId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GitNamespacesId' from JSON`,
  );
}

/** @internal */
export const GitNamespacesResponseBody$inboundSchema: z.ZodType<
  GitNamespacesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: z.string(),
  slug: z.string(),
  id: z.union([z.string(), z.number()]),
  ownerType: z.string(),
  name: z.string().optional(),
  isAccessRestricted: z.boolean().optional(),
  installationId: z.number().optional(),
  requireReauth: z.boolean().optional(),
});

/** @internal */
export type GitNamespacesResponseBody$Outbound = {
  provider: string;
  slug: string;
  id: string | number;
  ownerType: string;
  name?: string | undefined;
  isAccessRestricted?: boolean | undefined;
  installationId?: number | undefined;
  requireReauth?: boolean | undefined;
};

/** @internal */
export const GitNamespacesResponseBody$outboundSchema: z.ZodType<
  GitNamespacesResponseBody$Outbound,
  z.ZodTypeDef,
  GitNamespacesResponseBody
> = z.object({
  provider: z.string(),
  slug: z.string(),
  id: z.union([z.string(), z.number()]),
  ownerType: z.string(),
  name: z.string().optional(),
  isAccessRestricted: z.boolean().optional(),
  installationId: z.number().optional(),
  requireReauth: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitNamespacesResponseBody$ {
  /** @deprecated use `GitNamespacesResponseBody$inboundSchema` instead. */
  export const inboundSchema = GitNamespacesResponseBody$inboundSchema;
  /** @deprecated use `GitNamespacesResponseBody$outboundSchema` instead. */
  export const outboundSchema = GitNamespacesResponseBody$outboundSchema;
  /** @deprecated use `GitNamespacesResponseBody$Outbound` instead. */
  export type Outbound = GitNamespacesResponseBody$Outbound;
}

export function gitNamespacesResponseBodyToJSON(
  gitNamespacesResponseBody: GitNamespacesResponseBody,
): string {
  return JSON.stringify(
    GitNamespacesResponseBody$outboundSchema.parse(gitNamespacesResponseBody),
  );
}

export function gitNamespacesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GitNamespacesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GitNamespacesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GitNamespacesResponseBody' from JSON`,
  );
}