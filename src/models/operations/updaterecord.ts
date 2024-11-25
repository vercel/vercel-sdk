/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of the DNS record
 */
export const UpdateRecordType = {
  A: "A",
  Aaaa: "AAAA",
  Alias: "ALIAS",
  Caa: "CAA",
  Cname: "CNAME",
  Https: "HTTPS",
  Mx: "MX",
  Srv: "SRV",
  Txt: "TXT",
  Ns: "NS",
} as const;
/**
 * The type of the DNS record
 */
export type UpdateRecordType = ClosedEnum<typeof UpdateRecordType>;

export type Srv = {
  target: string | null;
  weight: number | null;
  port: number | null;
  priority: number | null;
};

export type Https = {
  priority: number | null;
  target: string | null;
  params?: string | null | undefined;
};

export type UpdateRecordRequestBody = {
  /**
   * The name of the DNS record
   */
  name?: string | null | undefined;
  /**
   * The value of the DNS record
   */
  value?: string | null | undefined;
  /**
   * The type of the DNS record
   */
  type?: UpdateRecordType | null | undefined;
  /**
   * The Time to live (TTL) value of the DNS record
   */
  ttl?: number | null | undefined;
  /**
   * The MX priority value of the DNS record
   */
  mxPriority?: number | null | undefined;
  srv?: Srv | null | undefined;
  https?: Https | null | undefined;
  /**
   * A comment to add context on what this DNS record is for
   */
  comment?: string | undefined;
};

export type UpdateRecordRequest = {
  /**
   * The id of the DNS record
   */
  recordId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: UpdateRecordRequestBody | undefined;
};

export const RecordType = {
  A: "A",
  Aaaa: "AAAA",
  Alias: "ALIAS",
  Caa: "CAA",
  Cname: "CNAME",
  Https: "HTTPS",
  Mx: "MX",
  Srv: "SRV",
  Txt: "TXT",
  Ns: "NS",
} as const;
export type RecordType = ClosedEnum<typeof RecordType>;

export const UpdateRecordDnsType = {
  Record: "record",
  RecordSys: "record-sys",
} as const;
export type UpdateRecordDnsType = ClosedEnum<typeof UpdateRecordDnsType>;

export type UpdateRecordResponseBody = {
  createdAt?: number | null | undefined;
  creator: string;
  domain: string;
  id: string;
  name: string;
  recordType: RecordType;
  ttl?: number | undefined;
  type: UpdateRecordDnsType;
  value: string;
  comment?: string | undefined;
};

/** @internal */
export const UpdateRecordType$inboundSchema: z.ZodNativeEnum<
  typeof UpdateRecordType
> = z.nativeEnum(UpdateRecordType);

/** @internal */
export const UpdateRecordType$outboundSchema: z.ZodNativeEnum<
  typeof UpdateRecordType
> = UpdateRecordType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRecordType$ {
  /** @deprecated use `UpdateRecordType$inboundSchema` instead. */
  export const inboundSchema = UpdateRecordType$inboundSchema;
  /** @deprecated use `UpdateRecordType$outboundSchema` instead. */
  export const outboundSchema = UpdateRecordType$outboundSchema;
}

/** @internal */
export const Srv$inboundSchema: z.ZodType<Srv, z.ZodTypeDef, unknown> = z
  .object({
    target: z.nullable(z.string()),
    weight: z.nullable(z.number().int()),
    port: z.nullable(z.number().int()),
    priority: z.nullable(z.number().int()),
  });

/** @internal */
export type Srv$Outbound = {
  target: string | null;
  weight: number | null;
  port: number | null;
  priority: number | null;
};

/** @internal */
export const Srv$outboundSchema: z.ZodType<Srv$Outbound, z.ZodTypeDef, Srv> = z
  .object({
    target: z.nullable(z.string()),
    weight: z.nullable(z.number().int()),
    port: z.nullable(z.number().int()),
    priority: z.nullable(z.number().int()),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Srv$ {
  /** @deprecated use `Srv$inboundSchema` instead. */
  export const inboundSchema = Srv$inboundSchema;
  /** @deprecated use `Srv$outboundSchema` instead. */
  export const outboundSchema = Srv$outboundSchema;
  /** @deprecated use `Srv$Outbound` instead. */
  export type Outbound = Srv$Outbound;
}

export function srvToJSON(srv: Srv): string {
  return JSON.stringify(Srv$outboundSchema.parse(srv));
}

export function srvFromJSON(
  jsonString: string,
): SafeParseResult<Srv, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Srv$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Srv' from JSON`,
  );
}

/** @internal */
export const Https$inboundSchema: z.ZodType<Https, z.ZodTypeDef, unknown> = z
  .object({
    priority: z.nullable(z.number().int()),
    target: z.nullable(z.string()),
    params: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Https$Outbound = {
  priority: number | null;
  target: string | null;
  params?: string | null | undefined;
};

/** @internal */
export const Https$outboundSchema: z.ZodType<
  Https$Outbound,
  z.ZodTypeDef,
  Https
> = z.object({
  priority: z.nullable(z.number().int()),
  target: z.nullable(z.string()),
  params: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Https$ {
  /** @deprecated use `Https$inboundSchema` instead. */
  export const inboundSchema = Https$inboundSchema;
  /** @deprecated use `Https$outboundSchema` instead. */
  export const outboundSchema = Https$outboundSchema;
  /** @deprecated use `Https$Outbound` instead. */
  export type Outbound = Https$Outbound;
}

export function httpsToJSON(https: Https): string {
  return JSON.stringify(Https$outboundSchema.parse(https));
}

export function httpsFromJSON(
  jsonString: string,
): SafeParseResult<Https, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Https$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Https' from JSON`,
  );
}

/** @internal */
export const UpdateRecordRequestBody$inboundSchema: z.ZodType<
  UpdateRecordRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  type: z.nullable(UpdateRecordType$inboundSchema).optional(),
  ttl: z.nullable(z.number().int()).optional(),
  mxPriority: z.nullable(z.number().int()).optional(),
  srv: z.nullable(z.lazy(() => Srv$inboundSchema)).optional(),
  https: z.nullable(z.lazy(() => Https$inboundSchema)).optional(),
  comment: z.string().optional(),
});

/** @internal */
export type UpdateRecordRequestBody$Outbound = {
  name?: string | null | undefined;
  value?: string | null | undefined;
  type?: string | null | undefined;
  ttl?: number | null | undefined;
  mxPriority?: number | null | undefined;
  srv?: Srv$Outbound | null | undefined;
  https?: Https$Outbound | null | undefined;
  comment?: string | undefined;
};

/** @internal */
export const UpdateRecordRequestBody$outboundSchema: z.ZodType<
  UpdateRecordRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateRecordRequestBody
> = z.object({
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  type: z.nullable(UpdateRecordType$outboundSchema).optional(),
  ttl: z.nullable(z.number().int()).optional(),
  mxPriority: z.nullable(z.number().int()).optional(),
  srv: z.nullable(z.lazy(() => Srv$outboundSchema)).optional(),
  https: z.nullable(z.lazy(() => Https$outboundSchema)).optional(),
  comment: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRecordRequestBody$ {
  /** @deprecated use `UpdateRecordRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateRecordRequestBody$inboundSchema;
  /** @deprecated use `UpdateRecordRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateRecordRequestBody$outboundSchema;
  /** @deprecated use `UpdateRecordRequestBody$Outbound` instead. */
  export type Outbound = UpdateRecordRequestBody$Outbound;
}

export function updateRecordRequestBodyToJSON(
  updateRecordRequestBody: UpdateRecordRequestBody,
): string {
  return JSON.stringify(
    UpdateRecordRequestBody$outboundSchema.parse(updateRecordRequestBody),
  );
}

export function updateRecordRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRecordRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRecordRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRecordRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateRecordRequest$inboundSchema: z.ZodType<
  UpdateRecordRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  recordId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => UpdateRecordRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateRecordRequest$Outbound = {
  recordId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?: UpdateRecordRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateRecordRequest$outboundSchema: z.ZodType<
  UpdateRecordRequest$Outbound,
  z.ZodTypeDef,
  UpdateRecordRequest
> = z.object({
  recordId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => UpdateRecordRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRecordRequest$ {
  /** @deprecated use `UpdateRecordRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateRecordRequest$inboundSchema;
  /** @deprecated use `UpdateRecordRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateRecordRequest$outboundSchema;
  /** @deprecated use `UpdateRecordRequest$Outbound` instead. */
  export type Outbound = UpdateRecordRequest$Outbound;
}

export function updateRecordRequestToJSON(
  updateRecordRequest: UpdateRecordRequest,
): string {
  return JSON.stringify(
    UpdateRecordRequest$outboundSchema.parse(updateRecordRequest),
  );
}

export function updateRecordRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRecordRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRecordRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRecordRequest' from JSON`,
  );
}

/** @internal */
export const RecordType$inboundSchema: z.ZodNativeEnum<typeof RecordType> = z
  .nativeEnum(RecordType);

/** @internal */
export const RecordType$outboundSchema: z.ZodNativeEnum<typeof RecordType> =
  RecordType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecordType$ {
  /** @deprecated use `RecordType$inboundSchema` instead. */
  export const inboundSchema = RecordType$inboundSchema;
  /** @deprecated use `RecordType$outboundSchema` instead. */
  export const outboundSchema = RecordType$outboundSchema;
}

/** @internal */
export const UpdateRecordDnsType$inboundSchema: z.ZodNativeEnum<
  typeof UpdateRecordDnsType
> = z.nativeEnum(UpdateRecordDnsType);

/** @internal */
export const UpdateRecordDnsType$outboundSchema: z.ZodNativeEnum<
  typeof UpdateRecordDnsType
> = UpdateRecordDnsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRecordDnsType$ {
  /** @deprecated use `UpdateRecordDnsType$inboundSchema` instead. */
  export const inboundSchema = UpdateRecordDnsType$inboundSchema;
  /** @deprecated use `UpdateRecordDnsType$outboundSchema` instead. */
  export const outboundSchema = UpdateRecordDnsType$outboundSchema;
}

/** @internal */
export const UpdateRecordResponseBody$inboundSchema: z.ZodType<
  UpdateRecordResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.nullable(z.number()).optional(),
  creator: z.string(),
  domain: z.string(),
  id: z.string(),
  name: z.string(),
  recordType: RecordType$inboundSchema,
  ttl: z.number().optional(),
  type: UpdateRecordDnsType$inboundSchema,
  value: z.string(),
  comment: z.string().optional(),
});

/** @internal */
export type UpdateRecordResponseBody$Outbound = {
  createdAt?: number | null | undefined;
  creator: string;
  domain: string;
  id: string;
  name: string;
  recordType: string;
  ttl?: number | undefined;
  type: string;
  value: string;
  comment?: string | undefined;
};

/** @internal */
export const UpdateRecordResponseBody$outboundSchema: z.ZodType<
  UpdateRecordResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateRecordResponseBody
> = z.object({
  createdAt: z.nullable(z.number()).optional(),
  creator: z.string(),
  domain: z.string(),
  id: z.string(),
  name: z.string(),
  recordType: RecordType$outboundSchema,
  ttl: z.number().optional(),
  type: UpdateRecordDnsType$outboundSchema,
  value: z.string(),
  comment: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRecordResponseBody$ {
  /** @deprecated use `UpdateRecordResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateRecordResponseBody$inboundSchema;
  /** @deprecated use `UpdateRecordResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateRecordResponseBody$outboundSchema;
  /** @deprecated use `UpdateRecordResponseBody$Outbound` instead. */
  export type Outbound = UpdateRecordResponseBody$Outbound;
}

export function updateRecordResponseBodyToJSON(
  updateRecordResponseBody: UpdateRecordResponseBody,
): string {
  return JSON.stringify(
    UpdateRecordResponseBody$outboundSchema.parse(updateRecordResponseBody),
  );
}

export function updateRecordResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateRecordResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateRecordResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateRecordResponseBody' from JSON`,
  );
}