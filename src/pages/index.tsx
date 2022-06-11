import {getOptionalToken} from "@leight-core/server";
import {GetServerSideProps} from "next";

export default function Index() {
	return null;
};

export interface IWithTokenRequest {
	toDestination: string;
	toPublic?: string;
}

export const withToken: (withToken: IWithTokenRequest) => GetServerSideProps = ({toDestination, toPublic = "/public"}) => async ctx => {
	const token = await getOptionalToken(ctx);
	return {
		redirect: token ? {destination: toDestination} : {destination: toPublic},
		props: {},
	};
};

export const getServerSideProps = withToken({
	toDestination: "/lab",
});
