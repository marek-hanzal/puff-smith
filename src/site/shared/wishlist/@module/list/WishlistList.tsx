import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {WishlistCreateForm} from "@/puff-smith/site/shared/wishlist/@module/form/WishlistCreateForm";
import {useDeleteMutation} from "@/sdk/api/wishlist/delete";
import {IWishlistListSourceProps, useWishlistQueryInvalidate, WishlistListSource} from "@/sdk/api/wishlist/query";
import {ExportOutlined} from "@ant-design/icons";
import {BlockProvider, DeleteItemIcon, ListItem, ListItemMeta, ModalButton, Template, toLocalDateTime} from "@leight-core/client";
import {Divider, message, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IWishlistListProps extends Partial<IWishlistListSourceProps> {
}

export const WishlistList: FC<IWishlistListProps> = props => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const wishlistQueryInvalidate = useWishlistQueryInvalidate();
	return <WishlistListSource
		locale={{
			emptyText: <Template
				label={"shared.wishlist.empty"}
				extra={<Divider/>}
			>
				<BlockProvider>
					<WishlistCreateForm/>
				</BlockProvider>
			</Template>
		}}
		{...props}
	>
		{wishlist => <ListItem
			key={wishlist.id}
			extra={<ModalButton
				button={{
					danger: true,
					type: "text",
					icon: <DeleteItemIcon/>,
					loading: deleteMutation.isLoading,
				}}
				okButtonProps={{
					danger: true,
					type: "text",
					size: "large",
					icon: <DeleteItemIcon/>,
					loading: deleteMutation.isLoading,
				}}
				cancelButtonProps={{
					type: "text",
					disabled: deleteMutation.isLoading,
				}}
				title={"shared.wishlist.delete.title"}
				onOk={setShow => {
					deleteMutation.mutate([wishlist.id], {
						onSuccess: async () => {
							message.success(t("shared.wishlist.delete.success"));
							await wishlistQueryInvalidate();
							setShow(false);
						},
					});
				}}
			>
				shared.wishlist.delete.content
			</ModalButton>}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>} size={0}>
					{wishlist.url ? <a href={wishlist.url} target={"_blank"} rel="noreferrer">
						<Space size={4}>
							{t(`wishlist.${wishlist.name}`, wishlist.name)}
							<ExportOutlined/>
						</Space>
					</a> : t(`wishlist.${wishlist.name}`, wishlist.name)}
					<Tags
						color={"gold"}
						translation={"common.wishlist"}
						tags={wishlist.tags}
					/>
					{wishlist.cost && <Price withColor withIcon price={wishlist.cost}/>}
					{toLocalDateTime(wishlist.created)}
				</Space>}
				description={<div style={{whiteSpace: "pre-wrap"}}>
					{wishlist.note}
				</div>}
			/>
		</ListItem>}
	</WishlistListSource>;
};
