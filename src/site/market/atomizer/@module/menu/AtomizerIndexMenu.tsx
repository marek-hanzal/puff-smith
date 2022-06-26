import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {CommentOutlined} from "@ant-design/icons";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerIndexMenuProps extends Partial<IMenuProps> {
	atomizer: IAtomizer;
}

export const AtomizerIndexMenu: FC<IAtomizerIndexMenuProps> = ({atomizer, ...props}) => {
	const query = {atomizerId: atomizer.id};
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "market.atomizer.atomizer.menu",
				href: "/market/atomizer/[atomizerId]",
				icon: <AtomizerIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "market.atomizer.vendor.menu",
				href: "/market/atomizer/[atomizerId]/vendor",
				icon: <VendorIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "market.atomizer.comment.menu",
				href: "/market/atomizer/[atomizerId]/comment",
				icon: <CommentOutlined/>,
				query,
			}),
		]}
		{...props}
	/>;
};
