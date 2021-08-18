import {Centered} from "@leight-core/leight";

export const Footer = () => {
	return <Centered>Vapers Dream [root] v[{process.env.NEXT_PUBLIC_VERSION}]</Centered>;
};
