import {HomeOutlined} from "@ant-design/icons";
import {LoaderLayout} from "@leight-core/common";
import {useEffect} from "react";
import {useNavigate} from "@leight-core/utils";
import {withAppLayout} from "@/puff-smith/site/shared";
import {FullLogoIcon} from "@/puff-smith";
import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";
import {Session} from "next-auth";

interface IIndexProps {
	_session: Session | null;
}

export default withAppLayout(function Index({_session}: IIndexProps) {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/" + "public");
		}, 1500);
	}, []);
	return <LoaderLayout
		logo={<FullLogoIcon/>}
		icon={<HomeOutlined/>}
	/>;
});

export const getServerSideProps: GetServerSideProps<IIndexProps> = async ctx => {
	return {
		props: {
			_session: await getSession({ctx}),
		},
	}
}
