import {WishlistIcon} from "@/puff-smith/component/icon/WishlistIcon";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/wishlist/create";
import {useWishlistCountQueryInvalidate, useWishlistQueryInvalidate} from "@/sdk/api/wishlist/query";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IWishlistCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const WishlistCreateForm: FC<IWishlistCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const wishlistQueryInvalidate = useWishlistQueryInvalidate();
	const wishlistCountQueryInvalidate = useWishlistCountQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.wishlist.create"}
		onSuccess={async response => {
			message.success(t("shared.wishlist.create.success", response.response));
			await wishlistQueryInvalidate();
			await wishlistCountQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<FormItem field={"url"} hasTooltip/>
		<FormItem field={"cost"} hasTooltip>
			<InputNumber
				min={0}
				max={1000000}
				step={250}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"note"} hasTooltip>
			<TextArea
				autoSize={{
					minRows: 6,
					maxRows: 6,
				}}
			/>
		</FormItem>
		<FormItem field={"tags"} hasTooltip>
			<TagSelect
				mode={"multiple"}
				translation={"common.wishlist"}
				applyFilter={{
					group: "wishlist",
				}}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<WishlistIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
