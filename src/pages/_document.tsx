import {default as CoolDocument, Head, Html, Main, NextScript} from "next/document";

class Document extends CoolDocument {
	render() {
		return (
			<Html>
				<Head>
					<link rel={"shortcut icon"} href={"/favicon.ico"}/>
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

// noinspection JSUnusedGlobalSymbols
export default Document;
