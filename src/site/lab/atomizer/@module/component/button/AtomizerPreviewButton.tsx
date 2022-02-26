import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FC} from "react";
import {AtomizerIcon} from "@/puff-smith";
import {ExportOutlined} from "@ant-design/icons";
import {AtomizerLinkButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerLinkButton";
import {AtomizerPreview} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerPreview";

export interface IAtomizerPreviewButtonProps extends Partial<IDrawerButtonProps> {
	atomizer: AtomizerDto;
}

export const AtomizerPreviewButton: FC<IAtomizerPreviewButtonProps> = ({atomizer, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<AtomizerIcon/>}
			title={'lab.atomizer.preview'}
			{...props}
		>
			<AtomizerPreview forceList atomizer={atomizer}/>
		</DrawerButton>
		<AtomizerLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			atomizer={atomizer}
		/>
	</>
}
