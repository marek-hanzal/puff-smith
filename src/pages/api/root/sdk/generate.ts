import {GenerateEndpoint, generateIMutationEndpoint} from "@leight-core/sdk";
import {IGenerators, ISdk} from "@leight-core/api";
import {Endpoint} from "@leight-core/endpoint";

export function generateIQueryEndpoint(sdk: ISdk): string {
	const name = sdk.endpoint.name.replace("Endpoint", "");
	const pair = (sdk.endpoint.generics?.[0] || "void") + ", " + (sdk.endpoint.generics?.[1] || "void");
	const api = sdk.endpoint.api;
	const query = sdk.endpoint.generics?.[2] || "void";
	const generics = query + ", " + pair;

	return `
import {FC} from "react";
import {ISourceContextProviderProps, ISourceContext, useSourceContext, createPostQuery, Form, IFormProps} from "@leight-core/leight";	
${sdk.imports.map(_import => `import {${_import.imports.join(", ")}} from ${_import.from};`).join("\n")}

${sdk.interfaces.map(item => item.source).join("\n")}

export type I${name}QueryParams = ${query};

export const use${name}Query = createPostQuery<I${name}QueryParams, ${pair}>("${api}");

export const use${name}Source = () => useSourceContext<${generics}>()

export interface I${name}SourceContext extends ISourceContext<${generics}> {
}

export interface I${name}SourceProps extends Partial<ISourceContextProviderProps<${generics}>> {
}
`.trim();
}

const generators: IGenerators = {
	"IMutationEndpoint": generateIMutationEndpoint,
	'IQueryEndpoint': generateIQueryEndpoint,
};

export default Endpoint<"Generate", void, void>(() => {
	/**
	 * Check if async/await stuff works properly
	 */

	return GenerateEndpoint('src/pages/api/**/*.ts', generators);
});
