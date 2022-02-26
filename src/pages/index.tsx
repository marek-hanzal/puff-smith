import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";

export default function Index() {
	return null;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const session = await getSession({ctx});
	return {
		redirect: session ? {destination: '/lab'} : {destination: '/public'},
		props: {},
	}
}
