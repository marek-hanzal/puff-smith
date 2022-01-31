import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {VapeIcon} from "@/puff-smith";

export interface IBuildVapeButtonProps extends Partial<IButtonLinkProps> {
	build: BuildDto;
}

export const BuildVapeButton: FC<IBuildVapeButtonProps> = ({build, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/build/[buildId]/vape'}
		query={{buildId: build.id}}
		icon={<VapeIcon/>}
		title={'lab.build.button.vape.create'}
		{...props}
	/>;
}
