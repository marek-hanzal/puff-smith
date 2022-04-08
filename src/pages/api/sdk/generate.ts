import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {Endpoint, GenerateEndpoint} from "@leight-core/server";

ServerBootstrap();

export default Endpoint<"Generate", void, string[]>(GenerateEndpoint());
