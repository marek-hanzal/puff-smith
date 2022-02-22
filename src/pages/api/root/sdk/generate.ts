import {glob} from "glob";
import ts from 'typescript';
import * as fs from "fs";
import {IEndpoint, pickNode, pickNodes, toNode} from "@leight-core/leight";
import {outputFile, remove} from 'fs-extra';

export interface IInterfaceReflection {
	name: string;
	source: string;
}

export interface IEndpointReflection {
	name: string;
	type: string;
	generics: string[];
}

export interface ISdk {
	file: string;
	interfaces: IInterfaceReflection[];
	endpoint?: IEndpointReflection;
}

export function isExport(node: ts.Node, sourceFile: ts.SourceFile): boolean {
	return !!pickNode(['SyntaxList', 'ExportKeyword'], node, sourceFile);
}

export function exportInterface(node: ts.Node, sourceFile: ts.SourceFile): IInterfaceReflection | false {
	const source = node.getText(sourceFile);
	const withExport = isExport(node, sourceFile);
	const name = toNode(pickNode(['Identifier'], node, sourceFile)!!, sourceFile);
	console.info(`=== Export interface (${withExport}) ===\n${source}\n`);
	return withExport && {
		source,
		name: name.source,
	};
}

export function exportEndpoint(node: ts.Node, sourceFile: ts.SourceFile): IEndpointReflection | false {
	const source = node.getText(sourceFile);
	const withExport = isExport(node, sourceFile);

	console.info(`=== Checking Endpoint Node ===\n${source}`);

	if (!withExport) {
		console.info('- not exported\n');
		return false;
	}

	const variableDeclarationNode = pickNode(['VariableDeclarationList', 'SyntaxList', 'VariableDeclaration'], node, sourceFile);

	if (!variableDeclarationNode) {
		console.info('- variable declaration node not found\n');
		return false;
	}

	const nodes = [
		pickNode(['Identifier'], variableDeclarationNode, sourceFile),
		pickNode(['TypeReference', 'Identifier'], variableDeclarationNode, sourceFile),
		pickNode(['TypeReference', 'SyntaxList'], variableDeclarationNode, sourceFile),
	].filter(node => node);

	if (nodes.length !== 3) {
		console.info('- some of syntax nodes missing\n');
		return false;
	}

	const accept = [
		'IEndpoint',
		'IMutationEndpoint',
		'ICreateEndpoint',
		'IPatchEndpoint',
		'IQueryEndpoint',
	];

	const type = toNode(nodes[1]!!, sourceFile).source;
	if (!accept.includes(type)) {
		console.info(`- unknown endpoint type [${type}]\n`);
		return false;
	}

	console.info('- success\n');

	return {
		name: toNode(nodes[0]!!, sourceFile).source,
		type,
		generics: pickNodes(['+(TypeReference|UnionType|VoidKeyword|UndefinedKeyword|TypeLiteral)'], nodes[2]!!, sourceFile).map(node => toNode(node, sourceFile).source),
	};
}

export function toSdk(endpoint: string): ISdk {
	const interfaces: (IInterfaceReflection | false)[] = [];
	const endpoints: (IEndpointReflection | false)[] = [];
	const root = ts.createSourceFile(endpoint, fs.readFileSync(endpoint, 'utf8'), ts.ScriptTarget.Latest)

	pickNodes(['*', 'InterfaceDeclaration'], root, root).forEach(node => interfaces.push(exportInterface(node, root)));
	pickNodes(['*', 'FirstStatement'], root, root).forEach(node => endpoints.push(exportEndpoint(node, root)));

	return {
		file: root.fileName.replace('/pages', '/sdk'),
		interfaces: interfaces.filter(item => item).map<IInterfaceReflection>(item => item as IInterfaceReflection),
		endpoint: endpoints.filter(item => item).map<IEndpointReflection>(item => item as IEndpointReflection)?.[0],
	};
}

export function toSource(sdk: ISdk): string {
	const source: string[] = [];
	source.push(...sdk.interfaces.map(item => item.source));
	return source.join("\n");
}

export function toSdks(path: string): ISdk[] {
	return glob.sync(path).map(toSdk).filter(sdk => !!sdk.endpoint);
}

export const GenerateEndpoint: IEndpoint<void, any> = async (req, res) => {
	await remove('src/sdk');

	const exported: string[] = [];

	toSdks('src/pages/api/**/*.ts').forEach(sdk => {
		console.log(`Exporting [${sdk.file}]`, sdk);
		outputFile(sdk.file, toSource(sdk));
	})
	res.status(200).json(exported);
}

export default GenerateEndpoint;
