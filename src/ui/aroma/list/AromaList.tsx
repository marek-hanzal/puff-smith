import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {AromaInfiniteListSource} from "@/sdk/api/aroma/query";
import {InfiniteListItem, MobileContent} from "@leight-core/client";
import {FC} from "react";

export interface IAromaListProps {
}

export const AromaList: FC<IAromaListProps> = () => {
	return <>
		<MobileContent>
			<AromaInfiniteListSource
				withFulltext
			>
				{aroma => <InfiniteListItem
					key={"aroma-" + aroma.id}
					onClick={navigate => navigate("/market/aroma/[aromaId]", {aromaId: aroma.id})}
				>
					<AromaNameInline inline={false} aroma={aroma}/>
				</InfiniteListItem>}
			</AromaInfiniteListSource>
		</MobileContent>
	</>;
};
