import {generateIMutationEndpoint, generateSdkFor, IGenerators} from "@leight-core/sdk";
import {IEndpoint} from "@leight-core/leight";

const generators: IGenerators = {
	"IMutationEndpoint": generateIMutationEndpoint,
};

export const GenerateEndpoint: IEndpoint<void, any> = async (req, res) => {
	res.status(200).json(generateSdkFor('src/pages/api/**/*.ts', generators));
}

export default GenerateEndpoint;
