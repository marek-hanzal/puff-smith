import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {ITemplateProps, Template} from "@leight-core/client";
import {FC} from "react";

export interface IMixtureListEmptyProps extends Partial<ITemplateProps> {
}

export const MixtureListEmpty: FC<IMixtureListEmptyProps> = props => {
	return <Template
		icon={<MixtureIcon/>}
		label={"lab.mixture.empty"}
		{...props}
	/>;
};
