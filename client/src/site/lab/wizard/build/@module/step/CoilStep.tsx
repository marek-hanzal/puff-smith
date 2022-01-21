import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";
import {ITemplateProps} from "@leight-core/leight/dist";

export interface ICoilStepProps extends Partial<ITemplateProps> {
}

export const CoilStep: FC<ICoilStepProps> = props => {
	return <Template
		icon={<BuildIcon/>}
		label={"lab.wizard.build.coil"}
		{...props}
	/>;
};
