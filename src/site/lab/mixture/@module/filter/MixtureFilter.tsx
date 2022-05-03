import {MixtureAromaSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureAromaSelect";
import {MixtureNicotineSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureNicotineSelect";
import {MixtureRatioSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureRatioSelect";
import {MixtureVendorSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureVendorSelect";
import {MixturesSourceFilter} from "@/sdk/api/mixture/inventory/mixture/query";
import {FormItem, IFilterProps} from "@leight-core/client";
import {FC, useRef} from "react";

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
		translation={"common.mixture"}
		onClear={onClear}
		toForm={filter => {
			filter = toForm(filter);
			return ({
				...filter,
				vendorId: filter?.aroma?.vendorId,
				aromaId: filter?.aroma?.id,
				nicotine: filter?.nicotineToRound,
				ratio: filter?.vgToRound !== undefined ? `${filter.vgToRound}/${filter.pgToRound}` : undefined,
			});
		}}
		toFilter={({vendorId, aromaId, nicotine}) => toFilter({
			aroma: {
				id: aromaId,
				vendorId,
			},
			nicotineToRound: nicotine,
			...ratio.current,
		})}
		{...props}
	>
		<FormItem field={"aromaId"}>
			<MixtureAromaSelect
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
		<FormItem field={"vendorId"}>
			<MixtureVendorSelect
				allowClear
			/>
		</FormItem>
	</MixturesSourceFilter>;
};
