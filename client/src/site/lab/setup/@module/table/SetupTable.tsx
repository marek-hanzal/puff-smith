import {ISetupsSourceTableProps, SetupsSourceTable, useDeleteMutation, useSetupsQueryInvalidate} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {FC} from "react";
import {BuildInline} from "@/puff-smith/site/lab/build";
import {ModInline} from "@/puff-smith/site/lab/mod";
import {Menu, message} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import {SetupIcon} from "@/puff-smith";
import {DrawerButton, PreviewTemplate, QuickMenu} from "@leight-core/leight/dist";
import {SetupDeleteButton, SetupEditButton, SetupLinkButton, SetupPreview} from "@/puff-smith/site/lab/setup";
import {useTranslation} from "react-i18next";

export interface ISetupTableProps extends Partial<ISetupsSourceTableProps> {
}

export const SetupTable: FC<ISetupTableProps> = props => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const setupsQueryInvalidate = useSetupsQueryInvalidate();

	return <SetupsSourceTable
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, setup) => <QuickMenu>
					<Menu.Item>
						<DrawerButton
							width={750}
							type={'link'}
							size={'small'}
							icon={<EyeOutlined/>}
							title={'lab.setup.preview'}
						>
							<PreviewTemplate
								icon={<SetupIcon/>}
								label={'lab.setup.preview'}
								span={24}
							>
								<SetupPreview setup={setup}/>
							</PreviewTemplate>
						</DrawerButton>
					</Menu.Item>
					<Menu.Divider/>
					<Menu.Item>
						<SetupLinkButton size={'small'} setup={setup}/>
					</Menu.Item>
					<Menu.Item>
						<SetupEditButton size={'small'} type={'link'} setup={setup}/>
					</Menu.Item>
					<Menu.Divider/>
					<Menu.Item>
						<SetupDeleteButton
							size={'small'}
							type={'link'}
							setup={setup}
							onOk={setShow => {
								deleteMutation.mutate({
									id: setup.id,
								}, {
									onSuccess: () => {
										message.success(t('lab.setup.deleted.success'))
										setupsQueryInvalidate();
									},
								})
								setShow(false);
							}}
						/>
					</Menu.Item>
				</QuickMenu>,
				width: 0,
			}),
			column({
				key: "name",
				dataIndex: "name",
				title: "lab.setup.table.name",
				width: 220,
			}),
			column({
				key: "build",
				title: "lab.setup.table.build",
				render: (_, setup) => <BuildInline build={setup.build}/>,
			}),
			column({
				key: "mod",
				title: "lab.setup.table.mod",
				render: (_, setup) => <ModInline mod={setup.mod}/>,
				width: 340,
			}),
		]}
	</SetupsSourceTable>
}
