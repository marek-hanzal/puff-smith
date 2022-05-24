import {ICottonQuery} from "@/puff-smith/service/cotton/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {ISource} from "@leight-core/api";
import {CottonDraw} from "@prisma/client";

export type ICottonDrawEntity = CottonDraw & { draw: ITagEntity };

export interface ICottonDrawSource extends ISource<undefined, ICottonDrawEntity, ITag, ICottonQuery> {
}
