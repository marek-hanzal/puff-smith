import {IWithAromaEntity} from "@/puff-smith/service/aroma/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {AromaTaste, Prisma} from "@prisma/client";

export type IAromaTasteEntity = AromaTaste & IWithAromaEntity & { taste: ITagEntity };

export type IAromaTasteWhere = Prisma.AromaTasteWhereInput & IWithFulltext;

export interface IAromaTasteQuery extends IQuery<IAromaTasteWhere, Prisma.AromaTasteOrderByWithRelationInput> {
}

export interface IAromaTasteSource extends ISource<undefined, IAromaTasteEntity, ITag, IAromaTasteQuery> {
}
