import {ITagEntity} from "@/puff-smith/service/tag/interface";
import {CoilDraw} from "@prisma/client";

export type ICoilDrawEntity = CoilDraw & { draw: ITagEntity };
