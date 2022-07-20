import Icon from "@ant-design/icons";
import {IWithIdentity} from "@leight-core/api";
import {UseMutationResult} from "@tanstack/react-query";
import {Rate, Tooltip} from "antd";
import {FC, ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {MdDeleteOutline, MdOutlineThumbsUpDown, MdThumbDownOffAlt, MdThumbUpOffAlt, MdVerified} from "react-icons/md";

const icons: Record<string, ReactNode> = {
	"-2": <Icon component={MdDeleteOutline}/>,
	"-1": <Icon component={MdThumbDownOffAlt}/>,
	"0": <Icon component={MdOutlineThumbsUpDown}/>,
	"1": <Icon component={MdThumbUpOffAlt}/>,
	"2": <Icon component={MdVerified}/>,
};

export interface ILikeDislikeInlineProps {
	id: string;
	tooltip?: string;
	rating?: number | null;
	mutator: UseMutationResult<any, any, IWithIdentity & { rating?: number | null; }>;
	disabled?: boolean;
	onSuccess?: () => Promise<any>;
}

export const LikeDislikeInline: FC<ILikeDislikeInlineProps> = ({id, tooltip, rating, mutator, disabled = false, onSuccess}) => {
	const {t} = useTranslation();
	return <Tooltip title={tooltip ? t(tooltip) : undefined}>
		<Rate
			defaultValue={(rating !== null && rating !== undefined) ? rating + 3 : undefined}
			character={({index}) => icons[(index || 0) - 2]}
			disabled={mutator.isLoading || disabled}
			onChange={value => {
				const $value = value - 3;
				mutator.mutate({rating: rating === $value || value === 0 ? null : $value, id}, {
					onSuccess,
				});
			}}
		/>
	</Tooltip>;
};
