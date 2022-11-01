import {
    default as CoolDocument,
    Head,
    Html,
    Main,
    NextScript
} from "next/document";

class Document extends CoolDocument {
    render() {
        return (
            <Html className={"dark"}>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default Document;
