import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Prisma} from "@prisma/client";

export interface IAromaTasteQuery extends IQuery<Prisma.AromaTasteWhereInput & IWithFulltext, Prisma.AromaTasteOrderByWithRelationInput> {
}

export interface IAromaTasteSource extends ISource<undefined, { taste: ITagEntity }, ITag, IAromaTasteQuery> {
}
