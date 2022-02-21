import {createPrismaClient} from "@/puff-smith/prisma";
import {glob} from "glob";
import ts from 'typescript';
import * as fs from "fs";
import {IEndpoint} from "@leight-core/leight";

const prisma = createPrismaClient();

function printRecursiveFrom(node: ts.Node, indentLevel: number, sourceFile: ts.SourceFile) {
	const indentation = "-".repeat(indentLevel);
	const syntaxKind = ts.SyntaxKind[node.kind];
	const nodeText = node.getText(sourceFile);
	console.log(`${indentation}${syntaxKind}: ${nodeText}`);
	node.forEachChild(child => printRecursiveFrom(child, indentLevel + 1, sourceFile));
}

const GenerateEndpoint: IEndpoint<void, void> = async (req, res) => {
	glob.sync('src/pages/api/**/*.api.ts').forEach(source => {
		const file = ts.createSourceFile(source, fs.readFileSync(source, 'utf8'), ts.ScriptTarget.Latest);
		printRecursiveFrom(file, 0, file);
	})
	res.status(200).send(undefined);
}

export default GenerateEndpoint;
