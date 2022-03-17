import {GetServerSideProps} from "next";
import {getToken} from "next-auth/jwt";

export default function Index() {
	return null;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	console.log('Waiting for session')
	const token: any = await getToken({req: ctx.req});
	console.log('Done!')
	return {
		redirect: token ? {destination: '/lab'} : {destination: '/public'},
		props: {},
	}
}
