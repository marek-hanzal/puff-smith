import {MixtureAromaSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureAromaSelect";
import {MixtureBaseSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBaseSelect";
import {MixtureBoosterSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureBoosterSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureRatioSelect";
import {MixturesSourceControlProvider, MixturesSourceFilter} from "@/sdk/api/mixture/inventory/mixture/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC, MutableRefObject, useRef} from "react";

interface IInternalProps {
	ratio: MutableRefObject<{ pgToRound: number, vgToRound: number } | undefined>;
}

const Internal: FC<IInternalProps> = ({ratio}) => {
	return <MixturesSourceControlProvider>
		<FormItem field={"aromaId"}>
			<MixtureAromaSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"boosterId"}>
			<MixtureBoosterSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"baseId"}>
			<MixtureBaseSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"ratio"}>
			<MixtureRatioSelect
				allowClear
				onClear={() => {
					ratio.current = undefined;
				}}
				onSelect={({entity}) => {
					ratio.current = {pgToRound: entity.pg, vgToRound: entity.vg};
				}}
			/>
		</FormItem>
		<FormItem field={"nicotine"}>
			<MixtureNicotineSelect
				allowClear
			/>
		</FormItem>
	</MixturesSourceControlProvider>;
};

export interface IMixtureFilterProps extends Partial<IFilterProps> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = ({toFilter = filter => filter, toForm = values => values, ...props}) => {
	const ratio = useRef<{ pgToRound: number, vgToRound: number }>();

	const onClear = () => {
		ratio.current = undefined;
	};

	return <MixturesSourceFilter
		spaceProps={{
			size: 0,
		}}
		onClear={onClear}
		toForm={filter => {
			filter = toForm(filter);
			return ({
				...filter,
				vendorId: filter?.aroma?.vendorId,
				nicotine: filter?.nicotineToRound,
				ratio: filter?.vgToRound !== undefined ? `${filter.vgToRound}/${filter.pgToRound}` : undefined,
			});
		}}
		toFilter={({vendorId, aromaId, boosterId, baseId, nicotine}) => toFilter({
			aromaId,
			aroma: {
				vendorId,
			},
			boosterId,
			baseId,
			nicotineToRound: nicotine,
			...ratio.current,
		})}
		{...props}
	>
		<Internal ratio={ratio}/>
	</MixturesSourceFilter>;
};
