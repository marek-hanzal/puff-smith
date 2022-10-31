import {getOptionalToken}   from "@leight-core/viv";
import {GetServerSideProps} from "next";

export default function Index() {
    return null;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
    const token = await getOptionalToken(ctx);
    return {
        redirect: token ? {destination: "/lab"} : {destination: "/public"},
        props:    {},
    };
};
