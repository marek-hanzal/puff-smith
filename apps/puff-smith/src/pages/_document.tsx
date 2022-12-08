import {createGetInitialProps} from "@mantine/next";
import Document, {
    Head,
    Html,
    Main,
    NextScript
}                              from "next/document";

const getInitialProps = createGetInitialProps();

export default class extends Document {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html>
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
