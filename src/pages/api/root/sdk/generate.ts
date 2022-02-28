import {Endpoint} from "@leight-core/endpoint";
import {GenerateEndpoint} from "@leight-core/sdk";

export default Endpoint<"Generate", void, string[]>(GenerateEndpoint());
