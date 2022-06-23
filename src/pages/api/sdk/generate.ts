import {Endpoint, GenerateEndpoint} from "@leight-core/server";

export default Endpoint<"Generate", void, string[]>(GenerateEndpoint({}));
