import {toMixtureInfoBy} from "@/puff-smith/service/mixture/toMixtureInfoBy";
import {MixtureProvider, useMixtureSource} from "@/sdk/api/mixture/query";
import {Drawer} from "@leight-core/client";
import {FC} from "react";

export interface IMixtureSelectProps {
	value?: string;

	onChange?(value: string): void;
}

const MixtureSelectInternal: FC = () => {
	const sourceContext = useMixtureSource();
	const mixtureBy = toMixtureInfoBy(sourceContext.data());

	console.log(mixtureBy);

	return <Drawer>
		blal
	</Drawer>;
};

export const MixtureSelect: FC<IMixtureSelectProps> = ({value, onChange}) => {
	return <MixtureProvider>
		<MixtureSelectInternal/>
	</MixtureProvider>;
};
