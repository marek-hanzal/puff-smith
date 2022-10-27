import {Url} from "@leight/shared";

export interface IWithIdentityQuery extends Url.IQuery {
    id: string;
}
