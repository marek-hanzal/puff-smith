import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";
import {MixtureIcon} from "@/puff-smith";
import {MixtureLinkButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {ExportOutlined} from "@ant-design/icons";

export interface IMixturePreviewButtonProps extends Partial<IDrawerButtonProps> {
	mixture: MixtureDto;
}

export const MixturePreviewButton: FC<IMixturePreviewButtonProps> = ({mixture, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<MixtureIcon/>}
			title={'lab.mixture.preview'}
			{...props}
		>
			<MixturePreview
				forceList
				mixture={mixture}
			/>
		</DrawerButton>
		<MixtureLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			mixture={mixture}
		/>
	</>
}
