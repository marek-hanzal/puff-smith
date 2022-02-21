import type {NextApiRequest, NextApiResponse} from 'next'
import {createPrismaClient} from "@/puff-smith/prisma";
import {glob} from "glob";
import ts from 'typescript';
import * as fs from "fs";

const prisma = createPrismaClient();

function printRecursiveFrom(
	node: ts.Node, indentLevel: number, sourceFile: ts.SourceFile
) {
	const indentation = "-".repeat(indentLevel);
	const syntaxKind = ts.SyntaxKind[node.kind];
	const nodeText = node.getText(sourceFile);
	console.log(`${indentation}${syntaxKind}: ${nodeText}`);
	node.forEachChild(child =>
		printRecursiveFrom(child, indentLevel + 1, sourceFile)
	);
}

type ApiFunc = (req: NextApiRequest, res: NextApiResponse) => void;

const generate: ApiFunc = async (req: NextApiRequest, res: NextApiResponse) => {
	glob.sync('src/pages/api/**/*.api.ts').forEach(source => {
		const file = ts.createSourceFile(source, fs.readFileSync(source, 'utf8'), ts.ScriptTarget.Latest);
		printRecursiveFrom(file, 0, file);
	})
	res.status(200).send(undefined);
}

export default generate;
