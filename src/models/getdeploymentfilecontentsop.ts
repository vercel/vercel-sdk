/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetDeploymentFileContentsRequest = {
  /**
   * The unique deployment identifier
   */
  id: string;
  /**
   * The unique file identifier
   */
  fileId: string;
  /**
   * Path to the file to fetch (only for Git deployments)
   */
  path?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/** @internal */
export const GetDeploymentFileContentsRequest$inboundSchema: z.ZodType<
  GetDeploymentFileContentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  fileId: z.string(),
  path: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type GetDeploymentFileContentsRequest$Outbound = {
  id: string;
  fileId: string;
  path?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const GetDeploymentFileContentsRequest$outboundSchema: z.ZodType<
  GetDeploymentFileContentsRequest$Outbound,
  z.ZodTypeDef,
  GetDeploymentFileContentsRequest
> = z.object({
  id: z.string(),
  fileId: z.string(),
  path: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentFileContentsRequest$ {
  /** @deprecated use `GetDeploymentFileContentsRequest$inboundSchema` instead. */
  export const inboundSchema = GetDeploymentFileContentsRequest$inboundSchema;
  /** @deprecated use `GetDeploymentFileContentsRequest$outboundSchema` instead. */
  export const outboundSchema = GetDeploymentFileContentsRequest$outboundSchema;
  /** @deprecated use `GetDeploymentFileContentsRequest$Outbound` instead. */
  export type Outbound = GetDeploymentFileContentsRequest$Outbound;
}

export function getDeploymentFileContentsRequestToJSON(
  getDeploymentFileContentsRequest: GetDeploymentFileContentsRequest,
): string {
  return JSON.stringify(
    GetDeploymentFileContentsRequest$outboundSchema.parse(
      getDeploymentFileContentsRequest,
    ),
  );
}

export function getDeploymentFileContentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDeploymentFileContentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDeploymentFileContentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDeploymentFileContentsRequest' from JSON`,
  );
}