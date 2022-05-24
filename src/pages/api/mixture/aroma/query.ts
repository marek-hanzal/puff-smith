import {IMixtureAromaSource} from "@/puff-smith/service/mixture/aroma/interface";
import {MixtureAromaSource} from "@/puff-smith/service/mixture/aroma/MixtureAromaSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aroma", IMixtureAromaSource>(MixtureAromaSource());
