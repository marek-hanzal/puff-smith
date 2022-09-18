import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {IVendorInfiniteListSourceProps, VendorInfiniteListSource} from "@/sdk/api/vendor/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IVendorListProps extends Partial<IVendorInfiniteListSourceProps> {
}

export const VendorList: FC<IVendorListProps> = props => {
	const {t} = useTranslation();
	return <VendorInfiniteListSource
		withFulltext
		{...props}
	>
		{vendor => <ListItem
			key={`vendor-${vendor.id}`}
			extra={<SelectionBool selection={vendor}/>}
		>
			<ListItemMeta
				title={vendor.name}
			/>
		</ListItem>}
	</VendorInfiniteListSource>;
};
