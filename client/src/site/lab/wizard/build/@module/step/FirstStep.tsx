import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";
import {ITemplateProps} from "@leight-core/leight/dist";

export interface IFirstStepProps extends Partial<ITemplateProps> {
}

export const FirstStep: FC<IFirstStepProps> = props => {
	return <Template
		icon={<BuildIcon/>}
		label={"lab.wizard.build.first"}
		{...props}
	/>;
};
