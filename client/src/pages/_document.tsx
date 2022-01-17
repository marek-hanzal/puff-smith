import {default as CoolDocument, Head, Html, Main, NextScript} from "next/document";

class Document extends CoolDocument {
	render() {
		return (
			<Html>
				<Head>
					<link rel={"shortcut icon"} href={(process.env.NEXT_PUBLIC_PUBLIC_URL || "") + "/favicon.ico"}/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

export default Document;
