import {Typography} from "antd";
import {FC} from "react";

export interface IVersionStampProps {
}

export const VersionStamp: FC<IVersionStampProps> = () => {
	return <Typography.Text type={"secondary"}>v[{process.env.NEXT_PUBLIC_VERSION}-{process.env.NEXT_PUBLIC_BUILD}#{process.env.BUILD_ID}]</Typography.Text>;
};
