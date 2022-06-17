import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAromaSource>(AromaSource);
