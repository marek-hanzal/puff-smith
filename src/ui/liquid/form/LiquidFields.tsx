import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {AromaDrawerItem, AromaProviderControl} from "@/sdk/api/aroma/query";
import {FC} from "react";

export interface ILiquidFieldsProps {
}

export const LiquidFields: FC<ILiquidFieldsProps> = () => {
	return <>
		<AromaProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<AromaDrawerItem
				field={"aromaId"}
				required
				render={aroma => <AromaNameInline aroma={aroma}/>}
				onSelection={selection => {

					/**
					 *    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					 */

					console.log(selection);
				}}
				toPreview={selection => selection?.single ? <AromaNameInline aroma={selection.single}/> : undefined}
				createWith={({formContext, visibleContext}) => <AromaCreateForm
					onSuccess={({response}) => {
						formContext.setValue([
							{name: "aromaId", value: response.id},
						]);
						visibleContext.hide();
					}}
				/>}
				createWithDrawer={{
					translation: {
						namespace: "shared.aroma.create",
						text: "title",
					},
				}}
				icon={<AromaIcon/>}
			/>
		</AromaProviderControl>
	</>;
};
