import {glob} from "glob";
import ts from 'typescript';
import * as fs from "fs";
import {IEndpoint} from "@leight-core/leight";
import {outputFile, remove} from 'fs-extra';

interface IPackage {
	file: string;
	interfaces: string[];
}

function exportInterface(node: ts.Node, sourceFile: ts.SourceFile): string[] {
	return [];
}

function parse(endpoint: string): IPackage {
	let interfaces: string[] = [];

	const root = ts.createSourceFile(endpoint, fs.readFileSync(endpoint, 'utf8'), ts.ScriptTarget.Latest)

	root.forEachChild(node => {
		const syntaxKind = ts.SyntaxKind[node.kind];
		const nodeText = node.getText(root);

		console.log(`${syntaxKind}: ${nodeText}`);

		switch (syntaxKind) {
			case 'ExportKeyword':
				console.log('Found export!', nodeText);
				break;
			case 'InterfaceDeclaration':
				interfaces = exportInterface(node, root);
				break;
		}
	})

	return {
		file: root.fileName.replace('/pages', '/sdk'),
		interfaces,
	};
}

export const GenerateEndpoint: IEndpoint<void, any> = async (req, res) => {
	await remove('src/sdk');

	const exported: string[] = [];

	glob.sync('src/pages/api/**/*.ts').forEach(source => {
		if (!source.match(/sign-in/ig)) {
			return;
		}
		console.log(`Parsing [${source}]`);
		const sdk = parse(source);
		console.log('Generated package', sdk);
		exported.push(sdk.file);
		console.log(`Exporting [${sdk.file}]`);
		outputFile(sdk.file, "export const aaa = 1;");

	})
	res.status(200).json(exported);
}

export default GenerateEndpoint;
