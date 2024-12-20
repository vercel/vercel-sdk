/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DeleteDeploymentRequest = {
  /**
   * The ID of the deployment to be deleted
   */
  id: string;
  /**
   * A Deployment or Alias URL. In case it is passed, the ID will be ignored
   */
  url?: string | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/**
 * A constant with the final state of the deployment.
 */
export const DeleteDeploymentState = {
  Deleted: "DELETED",
} as const;
/**
 * A constant with the final state of the deployment.
 */
export type DeleteDeploymentState = ClosedEnum<typeof DeleteDeploymentState>;

/**
 * The deployment was successfully deleted
 */
export type DeleteDeploymentResponseBody = {
  /**
   * The removed deployment ID.
   */
  uid: string;
  /**
   * A constant with the final state of the deployment.
   */
  state: DeleteDeploymentState;
};

/** @internal */
export const DeleteDeploymentRequest$inboundSchema: z.ZodType<
  DeleteDeploymentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  url: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type DeleteDeploymentRequest$Outbound = {
  id: string;
  url?: string | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const DeleteDeploymentRequest$outboundSchema: z.ZodType<
  DeleteDeploymentRequest$Outbound,
  z.ZodTypeDef,
  DeleteDeploymentRequest
> = z.object({
  id: z.string(),
  url: z.string().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDeploymentRequest$ {
  /** @deprecated use `DeleteDeploymentRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteDeploymentRequest$inboundSchema;
  /** @deprecated use `DeleteDeploymentRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteDeploymentRequest$outboundSchema;
  /** @deprecated use `DeleteDeploymentRequest$Outbound` instead. */
  export type Outbound = DeleteDeploymentRequest$Outbound;
}

export function deleteDeploymentRequestToJSON(
  deleteDeploymentRequest: DeleteDeploymentRequest,
): string {
  return JSON.stringify(
    DeleteDeploymentRequest$outboundSchema.parse(deleteDeploymentRequest),
  );
}

export function deleteDeploymentRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDeploymentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteDeploymentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDeploymentRequest' from JSON`,
  );
}

/** @internal */
export const DeleteDeploymentState$inboundSchema: z.ZodNativeEnum<
  typeof DeleteDeploymentState
> = z.nativeEnum(DeleteDeploymentState);

/** @internal */
export const DeleteDeploymentState$outboundSchema: z.ZodNativeEnum<
  typeof DeleteDeploymentState
> = DeleteDeploymentState$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDeploymentState$ {
  /** @deprecated use `DeleteDeploymentState$inboundSchema` instead. */
  export const inboundSchema = DeleteDeploymentState$inboundSchema;
  /** @deprecated use `DeleteDeploymentState$outboundSchema` instead. */
  export const outboundSchema = DeleteDeploymentState$outboundSchema;
}

/** @internal */
export const DeleteDeploymentResponseBody$inboundSchema: z.ZodType<
  DeleteDeploymentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uid: z.string(),
  state: DeleteDeploymentState$inboundSchema,
});

/** @internal */
export type DeleteDeploymentResponseBody$Outbound = {
  uid: string;
  state: string;
};

/** @internal */
export const DeleteDeploymentResponseBody$outboundSchema: z.ZodType<
  DeleteDeploymentResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteDeploymentResponseBody
> = z.object({
  uid: z.string(),
  state: DeleteDeploymentState$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDeploymentResponseBody$ {
  /** @deprecated use `DeleteDeploymentResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteDeploymentResponseBody$inboundSchema;
  /** @deprecated use `DeleteDeploymentResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteDeploymentResponseBody$outboundSchema;
  /** @deprecated use `DeleteDeploymentResponseBody$Outbound` instead. */
  export type Outbound = DeleteDeploymentResponseBody$Outbound;
}

export function deleteDeploymentResponseBodyToJSON(
  deleteDeploymentResponseBody: DeleteDeploymentResponseBody,
): string {
  return JSON.stringify(
    DeleteDeploymentResponseBody$outboundSchema.parse(
      deleteDeploymentResponseBody,
    ),
  );
}

export function deleteDeploymentResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDeploymentResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteDeploymentResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDeploymentResponseBody' from JSON`,
  );
}
