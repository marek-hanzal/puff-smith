import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {CommentOutlined} from "@ant-design/icons";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IAromaIndexMenuProps extends Partial<IMenuProps> {
	aroma: IAroma;
}

export const AromaIndexMenu: FC<IAromaIndexMenuProps> = ({aroma, ...props}) => {
	const query = {aromaId: aroma.id};
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "market.aroma.aroma.menu",
				href: "/market/aroma/[aromaId]",
				icon: <AromaIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "market.aroma.mixture.menu",
				href: "/market/aroma/[aromaId]/mixture",
				icon: <MixtureIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "market.aroma.comment.menu",
				href: "/market/aroma/[aromaId]/comment",
				icon: <CommentOutlined/>,
				query,
			}),
		]}
		{...props}
	/>;
};
