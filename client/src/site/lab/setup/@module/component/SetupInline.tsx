import {FC} from "react";
import {SetupDto} from "@/sdk/puff-smith/setup/dto";
import {Space, Typography} from "antd";

export interface ISetupInlineProps {
	setup: SetupDto;
}

export const SetupInline: FC<ISetupInlineProps> = ({setup}) => {
	return <Space direction={'vertical'}>
		<span>{setup.name}</span>
		<Space>
			<span>{setup.build.atomizer.name}</span>
			<span>{setup.build.ohm}ohm</span>
			<Typography.Text type={'secondary'}>{setup.mod.name}</Typography.Text>
		</Space>
		<Space>
			<span>{setup.build.coil.wire.name}</span>
			<Typography.Text>{(setup.build.coil.wire.ga ? setup.build.coil.wire.ga + 'GA' : null) || setup.build.coil.wire.description}</Typography.Text>
			<Typography.Text type={'secondary'}>{setup.build.coil.wire.vendor.name}</Typography.Text>
		</Space>
		<Space><span>{setup.build.cotton.name}</span><Typography.Text type={'secondary'}>{setup.build.cotton.vendor.name}</Typography.Text></Space>
	</Space>
}
