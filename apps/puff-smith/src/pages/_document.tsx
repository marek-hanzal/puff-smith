import {
    default as CoolDocument,
    Head,
    Html,
    Main,
    NextScript
} from "next/document";

export default class extends CoolDocument {
    render() {
        return (
            <Html className={"dark"}>
                <Head/>
                <body
                    className={"bg-white dark:bg-gray-900"}
                >
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

