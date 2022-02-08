import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FC} from "react";
import {AtomizerIcon} from "@/puff-smith";
import {AtomizerLinkButton, AtomizerPreview} from "@/puff-smith/site/lab/atomizer";
import {ExportOutlined} from "@ant-design/icons";
import {Space} from "antd";

export interface IAtomizerPreviewButtonProps extends Partial<IDrawerButtonProps> {
	atomizer: AtomizerDto;
}

export const AtomizerPreviewButton: FC<IAtomizerPreviewButtonProps> = ({atomizer, ...props}) => {
	return <Space size={0}>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<AtomizerIcon/>}
			title={'lab.atomizer.preview'}
			{...props}
		>
			<PreviewTemplate
				icon={<AtomizerIcon/>}
				label={'lab.atomizer.preview'}
				title={atomizer.name}
				subTitle={atomizer.vendor.name}
				span={24}
			>
				<AtomizerPreview atomizer={atomizer}/>
			</PreviewTemplate>
		</DrawerButton>
		<AtomizerLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			atomizer={atomizer}
		/>
	</Space>
}
