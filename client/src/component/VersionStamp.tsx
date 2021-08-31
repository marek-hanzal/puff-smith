import {FC} from "react";

export interface IVersionStampProps {
}

export const VersionStamp: FC<IVersionStampProps> = () => {
	return <>v[{process.env.NEXT_PUBLIC_VERSION}-{process.env.NEXT_PUBLIC_BUILD}]</>;
};
