import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {useAromaDeleteMutation} from "@/sdk/api/aroma/delete";
import {AromaInfiniteListSource, useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {DeleteItemIcon, EditIcon, InfiniteListItem, MobileContent, useNavigate, useOptionalCursorContext, useOptionalFilterContext} from "@leight-core/client";
import {message} from "antd";
import {SwipeAction, Toast} from "antd-mobile";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAromaListProps {
}

export const AromaList: FC<IAromaListProps> = () => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	const aromaDeleteMutation = useAromaDeleteMutation();
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	const filterContext = useOptionalFilterContext();
	const cursorContext = useOptionalCursorContext();
	return <>
		<MobileContent>
			<AromaInfiniteListSource
				withFulltext
			>
				{aroma => <SwipeAction
					key={"aroma-" + aroma.id}
					leftActions={[
						{
							key: "delete",
							text: <DeleteItemIcon/>,
							color: "danger",
							onClick: () => {
								Toast.show({
									icon: "loading",
									maskClickable: false,
								});
								aromaDeleteMutation.mutate([aroma.id], {
									onSuccess: async () => {
										message.success(t("shared.aroma.delete.success"));
										Toast.show({
											icon: "success",
											maskClickable: false,
										});
										await aromaQueryInvalidate();
										setTimeout(() => {
											filterContext?.setFilter({});
											cursorContext?.setPage(0);
										}, 0);
									},
									onError: () => {
										Toast.show({
											icon: "fail",
											maskClickable: false,
										});
									}
								});
							},
						},
					]}
					rightActions={[
						{
							key: "edit",
							text: <EditIcon/>,
							color: "primary",
							onClick: () => navigate("/market/aroma/[aromaId]/edit", {aromaId: aroma.id}),
						},
					]}
				>
					<InfiniteListItem
						onClick={navigate => navigate("/market/aroma/[aromaId]", {aromaId: aroma.id})}
					>
						<AromaNameInline inline={false} aroma={aroma}/>
					</InfiniteListItem>
				</SwipeAction>}
			</AromaInfiniteListSource>
		</MobileContent>
	</>;
};
