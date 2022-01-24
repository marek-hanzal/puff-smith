import {FC} from "react";
import {IVapesSourceTableProps, VapesSourceTable} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {SetupInline} from "@/puff-smith/site/lab/setup";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";
import {Menu, Statistic} from "antd";
import {DrawerButton, PreviewTemplate, QuickMenu} from "@leight-core/leight/dist";
import dayjs from "dayjs";
import {VapeCloneButton, VapeEditButton, VapeLinkButton, VapePreview} from "@/puff-smith/site/lab/vape";
import {VapeIcon} from "@/puff-smith";
import {EyeOutlined} from "@ant-design/icons";

export interface IVapeTableProps extends Partial<IVapesSourceTableProps> {
}

export const VapeTable: FC<IVapeTableProps> = props => {
	return <VapesSourceTable
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, vape) => <QuickMenu>
					<Menu.Item>
						<DrawerButton
							width={750}
							type={'link'}
							size={'small'}
							icon={<EyeOutlined/>}
							title={'lab.vape.preview'}
						>
							<PreviewTemplate
								icon={<VapeIcon/>}
								label={'lab.vape.preview'}
								span={24}
							>
								<VapePreview vape={vape}/>
							</PreviewTemplate>
						</DrawerButton>
					</Menu.Item>
					<Menu.Divider/>
					<Menu.Item>
						<VapeLinkButton size={'small'} vape={vape}/>
					</Menu.Item>
					<Menu.Item>
						<VapeEditButton size={'small'} type={'link'} vape={vape}/>
					</Menu.Item>
					<Menu.Item>
						<VapeCloneButton size={'small'} type={'link'} vape={vape}/>
					</Menu.Item>
				</QuickMenu>,
				width: 0,
			}),
			column({
				key: "setup",
				title: "lab.vape.table.setup",
				render: (_, vape) => <SetupInline setup={vape.setup}/>,
				width: 420,
			}),
			column({
				key: "mixture",
				title: "lab.vape.table.mixture",
				render: (_, vape) => <MixtureInline mixture={vape.mixture}/>
			}),
			column({
				key: "rating",
				title: "lab.vape.table.rating",
				render: (_, vape) => <Statistic value={vape.rating} suffix="/ 10"/>
			}),
			column({
				key: "taste",
				title: "lab.vape.table.taste",
				render: (_, vape) => <Statistic value={vape.taste} suffix="/ 10"/>
			}),
			column({
				key: "power",
				title: "lab.vape.table.power",
				render: (_, vape) => vape.power ? vape.power + ' W' : '-',
			}),
			column({
				key: "tc",
				title: "lab.vape.table.tc",
				render: (_, vape) => vape.tc ? vape.tc + ' °C' : '-',
			}),
			column({
				key: "age",
				title: "lab.vape.table.age",
				render: (_, vape) => {
					// @ts-ignore
					return dayjs.duration(dayjs().diff(dayjs.unix(vape.setup.build.created))).humanize()
				},
			}),
		]}
	</VapesSourceTable>;
}
