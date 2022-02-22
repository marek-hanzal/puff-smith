import {glob} from "glob";
import ts from 'typescript';
import * as fs from "fs";
import {IEndpoint} from "@leight-core/leight";
import {outputFile, remove} from 'fs-extra';

export interface IInterfaceReflection {
	name: string;
	source: string;
}

export interface IEndpointReflection {
	name: string;
	type: string;
}

export interface ISdk {
	file: string;
	interfaces: IInterfaceReflection[];
	endpoints: IEndpointReflection[];
}

export interface INode {
	node: ts.Node;
	sourceFile: ts.SourceFile;
	syntaxKind: string;
	source: string;
}

export type IForeachNodeCallback = (node: INode) => void;

export function toPrint(node: ts.Node, sourceFile: ts.SourceFile, indentLevel: number = 0) {
	const indentation = "    ".repeat(indentLevel);
	const syntaxKind = ts.SyntaxKind[node.kind];
	const nodeText = node.getText(sourceFile);
	console.log(`${indentation}${syntaxKind}: ${nodeText}`);
	node.getChildren(sourceFile).forEach(child => toPrint(child, sourceFile, indentLevel + 1));
}

export function toNode(node: ts.Node, sourceFile: ts.SourceFile): INode {
	return {
		node,
		sourceFile,
		syntaxKind: ts.SyntaxKind[node.kind],
		source: node.getText(sourceFile),
	};
}

export function foreachNode(node: ts.Node, sourceFile: ts.SourceFile, callback: IForeachNodeCallback) {
	node.forEachChild(node => callback(toNode(node, sourceFile)));
}

export type INodePath = {
	path: string;
	node: ts.Node;
};

export function toNodePaths(root: ts.Node, sourceFile: ts.SourceFile, path: string[] = []): INodePath[] {
	let paths = [
		{
			path: [...path, ts.SyntaxKind[root.kind]].join('/'),
			node: root,
		}
	];
	root.getChildren(sourceFile).forEach(node => {
		paths.push(...toNodePaths(node, sourceFile, [...path, ts.SyntaxKind[root.kind]]));
	});
	return paths;
}

export function pickNodes(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node[] {
	const request = path.join('/');
	return toNodePaths(root, sourceFile).filter(node => node.path === request).map(node => node.node);
}

export function pickNode(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node | undefined {
	return pickNodes(path, root, sourceFile)?.[0]
}

export function isExport(node: ts.Node, sourceFile: ts.SourceFile): boolean {
	return !!pickNode(['SyntaxList', 'ExportKeyword'], node, sourceFile);
}

export function exportInterface(node: ts.Node, sourceFile: ts.SourceFile): IInterfaceReflection | false {
	const source = node.getText(sourceFile);
	const withExport = isExport(node, sourceFile);
	const name = toNode(pickNode(['Identifier'], node, sourceFile)!!, sourceFile);

	toPrint(node, sourceFile);

	console.info(withExport ? "Export\n" : "Skip\n", source);
	return withExport && {
		source,
		name: name.source,
	};
}

export function exportEndpoint(node: ts.Node, sourceFile: ts.SourceFile): IEndpointReflection | false {
	const source = node.getText(sourceFile);
	const withExport = isExport(node, sourceFile);

	console.info(`Parsing\n${source}`);

	if (!withExport) {
		console.info('- not exported');
		return false;
	}

	const nodes = [
		pickNode(['VariableDeclarationList', 'SyntaxList', 'VariableDeclaration', 'Identifier'], node, sourceFile),
		pickNode(['VariableDeclarationList', 'SyntaxList', 'VariableDeclaration', 'TypeReference', 'Identifier'], node, sourceFile),
		pickNode(['VariableDeclarationList', 'SyntaxList', 'VariableDeclaration', 'TypeReference', 'SyntaxList'], node, sourceFile),
	].filter(node => node);

	if (nodes.length !== 3) {
		console.info('- some of syntax nodes missing');
		return false;
	}

	toPrint(nodes[2]!!, sourceFile);

	const types = pickNodes(['SyntaxList', 'TypeReference', 'Identifier'], nodes[2]!!, sourceFile);

	console.log('num of types', types.length);

	types.map(node => {
		console.log('types', toNode(node, sourceFile).source);
	});

	console.info('- success');

	return {
		name: toNode(nodes[0]!!, sourceFile).source,
		type: toNode(nodes[1]!!, sourceFile).source,
	};
}

export function toSdk(endpoint: string): ISdk {
	const interfaces: (IInterfaceReflection | false)[] = [];
	const endpoints: (IEndpointReflection | false)[] = [];
	const root = ts.createSourceFile(endpoint, fs.readFileSync(endpoint, 'utf8'), ts.ScriptTarget.Latest)

	foreachNode(root, root, ({node, syntaxKind}) => {
		switch (syntaxKind) {
			case 'InterfaceDeclaration':
				interfaces.push(exportInterface(node, root));
				break;
			case 'FirstStatement':
				endpoints.push(exportEndpoint(node, root));
				break;
		}
	});

	return {
		file: root.fileName.replace('/pages', '/sdk'),
		interfaces: interfaces.filter(item => item).map<IInterfaceReflection>(item => item as IInterfaceReflection),
		endpoints: endpoints.filter(item => item).map<IEndpointReflection>(item => item as IEndpointReflection),
	};
}

export function toSource(sdk: ISdk): string {
	const source: string[] = [];
	source.push(...sdk.interfaces.map(item => item.source));
	return source.join("\n");
}

export const GenerateEndpoint: IEndpoint<void, any> = async (req, res) => {
	await remove('src/sdk');

	const exported: string[] = [];

	glob.sync('src/pages/api/**/*.ts').forEach(source => {
		if (!source.match(/sign-in/ig)) {
			return;
		}
		console.log(`Parsing [${source}]`);
		const sdk = toSdk(source);
		console.log('Generated package', sdk);
		exported.push(sdk.file);
		console.log(`Exporting [${sdk.file}]`);
		outputFile(sdk.file, toSource(sdk));

	})
	res.status(200).json(exported);
}

export default GenerateEndpoint;
