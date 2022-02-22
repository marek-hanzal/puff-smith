import {glob} from "glob";
import ts from 'typescript';
import * as fs from "fs";
import {IEndpoint} from "@leight-core/leight";
import {outputFile, remove} from 'fs-extra';

export interface ISdk {
	file: string;
	interfaces: string[];
}

export function isExport(node: ts.Node, sourceFile: ts.SourceFile): boolean {
	return node.getChildren(sourceFile).filter(node => {
		return ts.SyntaxKind[node.kind] === 'SyntaxList' && node.getText(sourceFile) === 'export';
	}).length > 0;
}

export function exportInterface(node: ts.Node, sourceFile: ts.SourceFile): string | false {
	const source = node.getText(sourceFile);
	const withExport = isExport(node, sourceFile);
	console.info(withExport ? "Export\n" : "Skip\n", source);
	return withExport && source;
}

export function toSdk(endpoint: string): ISdk {
	const interfaces: (string | false)[] = [];
	const root = ts.createSourceFile(endpoint, fs.readFileSync(endpoint, 'utf8'), ts.ScriptTarget.Latest)

	root.forEachChild(node => {
		const syntaxKind = ts.SyntaxKind[node.kind];
		const nodeText = node.getText(root);

		// console.log(`${syntaxKind}: ${nodeText}`);

		switch (syntaxKind) {
			case 'ExportKeyword':
				console.log('Found export!', nodeText);
				break;
			case 'InterfaceDeclaration':
				interfaces.push(exportInterface(node, root));
				break;
		}
	})

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
