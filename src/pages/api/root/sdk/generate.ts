import {glob} from "glob";
import ts from 'typescript';
import * as fs from "fs";
import {IEndpoint} from "@leight-core/leight";
import {outputFile, remove} from 'fs-extra';

export interface ISdk {
	file: string;
	interfaces: string[];
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

export function pickNode(path: string[], root: ts.Node, sourceFile: ts.SourceFile): ts.Node | undefined {
	let node = root;
	path.forEach(name => {
		if (!node) {
			return;
		}
		node = node.getChildren(sourceFile).filter(node => ts.SyntaxKind[node.kind] === name)?.[0];
	});
	return node;
}

export function isExport(node: ts.Node, sourceFile: ts.SourceFile): boolean {
	return !!pickNode(['SyntaxList', 'ExportKeyword'], node, sourceFile);
}

export function exportInterface(node: ts.Node, sourceFile: ts.SourceFile): string | false {
	const source = node.getText(sourceFile);
	const withExport = isExport(node, sourceFile);
	console.info(withExport ? "Export\n" : "Skip\n", source);
	return withExport && source;
}

export function exportEndpoint(node: ts.Node, sourceFile: ts.SourceFile): string | false {
	const source = node.getText(sourceFile);
	const withExport = isExport(node, sourceFile);

	console.info(withExport ? "Export Endpoint\n" : "Skip\n", source);

	toPrint(node, sourceFile);

	if (!withExport) {
		return false;
	}

	const endpointNode = pickNode(['VariableDeclarationList', 'SyntaxList', 'VariableDeclaration', 'Identifier'], node, sourceFile);
	if (!endpointNode) {
		return false;
	}
	const endpointTypeNode = pickNode(['VariableDeclarationList', 'SyntaxList', 'VariableDeclaration', 'TypeReference', 'Identifier'], node, sourceFile);
	if (!endpointTypeNode) {
		return false;
	}

	const endpointName = toNode(endpointNode, sourceFile).source;
	const endpointType = toNode(endpointTypeNode, sourceFile).source;

	console.log(`- Endpoint name [${endpointName} : ${endpointType}]`);

	return false;
}

export function toSdk(endpoint: string): ISdk {
	const interfaces: (string | false)[] = [];
	const root = ts.createSourceFile(endpoint, fs.readFileSync(endpoint, 'utf8'), ts.ScriptTarget.Latest)

	foreachNode(root, root, ({node, syntaxKind}) => {
		switch (syntaxKind) {
			case 'InterfaceDeclaration':
				interfaces.push(exportInterface(node, root));
				break;
			case 'FirstStatement':
				exportEndpoint(node, root);
				break;
		}
	});

	return {
		file: root.fileName.replace('/pages', '/sdk'),
		interfaces: interfaces.filter(item => item).map<string>(item => item as string),
	};
}

export function toSource(sdk: ISdk): string {
	const source: string[] = [];
	source.push(...sdk.interfaces);
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
