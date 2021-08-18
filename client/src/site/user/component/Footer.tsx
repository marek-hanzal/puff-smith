import {Centered} from "@leight-core/leight";

export const Footer = () => {
	return <Centered>Vapers Dream [user] v[{process.env.NEXT_PUBLIC_VERSION}]</Centered>;
};
