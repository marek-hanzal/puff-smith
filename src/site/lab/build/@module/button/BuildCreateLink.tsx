import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {ICoil} from "@/puff-smith/service/coil/interface";
import {ICotton} from "@/puff-smith/service/cotton/interface";
import {ButtonLink, IButtonLinkProps} from "@leight-core/client";
import {FC} from "react";

export interface IBuildCreateLinkProps extends Partial<IButtonLinkProps> {
	atomizer: IAtomizer;
	coil: ICoil;
	cotton: ICotton;
}

export const BuildCreateLink: FC<IBuildCreateLinkProps> = ({atomizer, coil, cotton, ...props}) => {
	return <ButtonLink
		href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]/cotton/[cottonId]/build"}
		query={{
			atomizerId: atomizer.id,
			coilId: coil.id,
			cottonId: cotton.id,
		}}
		icon={<BuildIcon/>}
		label={"lab.build.create.build.button"}
		{...props}
	/>;
};
