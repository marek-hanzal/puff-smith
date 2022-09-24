/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, toLink} from "@leight-core/client";

export const LiquidDeleteApiLink = "/api/liquid/delete";

export type ILiquidDeleteQueryParams = any;

export const useLiquidDeleteMutation = createMutationHook<string[], ISourceItem<ILiquidSource>, ILiquidDeleteQueryParams>(LiquidDeleteApiLink, "post");

export const toLiquidDeleteLink = (queryParams?: ILiquidDeleteQueryParams) => toLink(LiquidDeleteApiLink, queryParams);
export const useLiquidDeleteLink = () => toLiquidDeleteLink;

export const useLiquidDeletePromise = createPromiseHook<string[], ISourceItem<ILiquidSource>, ILiquidDeleteQueryParams>(LiquidDeleteApiLink, "post");

export const LiquidDeletePromise = createPromise<string[], ISourceItem<ILiquidSource>, ILiquidDeleteQueryParams>(LiquidDeleteApiLink, "post");
