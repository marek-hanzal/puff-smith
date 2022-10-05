import {TranslationListSwipe}          from "@/puff-smith/ui/translation/list/TranslationListSwipe";
import {TranslationInfiniteListSource} from "@/sdk/api/translation/query";
import {
	Ellipsis,
	InfiniteListItem,
	MobileContent
}                                      from "@leight-core/client";
import {
	Divider,
	Space,
	Typography
}                                      from "antd";
import {FC}                            from "react";

export interface ITranslationListProps {
}

export const TranslationList: FC<ITranslationListProps> = () => {
	return <MobileContent>
		<TranslationInfiniteListSource
			withFulltext
		>
			{translation => <TranslationListSwipe translation={translation}>
				<InfiniteListItem
					onClick={navigate => navigate("/root/translation/[translationId]", {translationId: translation.id})}
					description={<Space split={<Divider type={"vertical"}/>}>
						<Typography.Text>
							{translation.language}
						</Typography.Text>
						<Typography.Text type={"secondary"}>
							{translation.key}
						</Typography.Text>
					</Space>}
				>
					<Ellipsis content={translation.value}/>
				</InfiniteListItem>
			</TranslationListSwipe>}
		</TranslationInfiniteListSource>
	</MobileContent>;
};
