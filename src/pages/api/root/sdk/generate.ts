import {IGenerators, ISdk} from "@leight-core/api";
import {Endpoint} from "@leight-core/endpoint";
import {GenerateEndpoint} from "@leight-core/sdk";

export function generateMutationEndpoint(sdk: ISdk): string {
	const name = sdk.endpoint.name.replace("Endpoint", "");
	const pair = (sdk.endpoint.generics?.[0] || "void") + ", " + (sdk.endpoint.generics?.[1] || "void");
	const api = sdk.endpoint.api;
	const query = sdk.endpoint.generics?.[2] || "void";
	const generics = query + ", " + pair;

	// language=text
	return `
import {FC} from "react";
import {createPostMutation, Form, IFormProps} from "@leight-core/common";	
${sdk.imports.map(_import => `import {${_import.imports.join(", ")}} from ${_import.from};`).join("\n")}

${sdk.interfaces.map(item => item.source).join("\n")}

export type I${name}QueryParams = ${query};

export const use${name}Mutation = createPostMutation<I${name}QueryParams, ${pair}>("${api}");

export interface I${name}DefaultFormProps extends Partial<IFormProps<${generics}>> {
}

export const ${name}DefaultForm: FC<I${name}DefaultFormProps> = props => <Form<${generics}>
	useMutation={use${name}Mutation}
	{...props}
/>
`.trim();
}

export function generateQueryEndpoint(sdk: ISdk): string {
	const name = sdk.endpoint.name.replace("Endpoint", "");
	const pair = (sdk.endpoint.generics?.[0] || "void") + ", " + (sdk.endpoint.generics?.[1] || "void");
	const api = sdk.endpoint.api;
	const query = sdk.endpoint.generics?.[2] || "void";
	const generics = query + ", " + pair;

	// language=text
	return `
import {FC} from "react";
import {ISourceContextProviderProps, ISourceContext, useSourceContext, createPostQuery, Form, IFormProps} from "@leight-core/common";	
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
	"MutationEndpoint": generateMutationEndpoint,
	'QueryEndpoint': generateQueryEndpoint,
};

export default Endpoint<"Generate", void, string[]>(GenerateEndpoint('src/pages/api/**/upload/**.ts', generators));
