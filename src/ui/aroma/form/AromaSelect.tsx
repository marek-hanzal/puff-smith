import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {AromaDrawerItem, AromaProviderControl} from "@/sdk/api/aroma/query";
import {ComponentProps, FC} from "react";

export interface IAromaSelectProps extends Omit<ComponentProps<typeof AromaDrawerItem>, "render" | "toPreview"> {
}

export const AromaSelect: FC<IAromaSelectProps> = props => {
	return <AromaProviderControl
		defaultSize={DEFAULT_LIST_SIZE}
	>
		<AromaDrawerItem
			render={aroma => <AromaNameInline aroma={aroma}/>}
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
			{...props}
		/>
	</AromaProviderControl>;
};
