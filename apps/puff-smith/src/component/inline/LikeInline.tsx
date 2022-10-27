import Icon             from "@ant-design/icons";
import {
	Rate,
	Tooltip
}                       from "antd";
import {
	FC,
	ReactNode
}                       from "react";
import {useTranslation} from "react-i18next";
import {
	MdDeleteOutline,
	MdOutlineThumbsUpDown,
	MdThumbDownOffAlt,
	MdThumbUpOffAlt,
	MdVerified
}                       from "react-icons/md";

const icons: Record<string, ReactNode> = {
	"-2": <Icon component={MdDeleteOutline}/>,
	"-1": <Icon component={MdThumbDownOffAlt}/>,
	"0":  <Icon component={MdOutlineThumbsUpDown}/>,
	"1":  <Icon component={MdThumbUpOffAlt}/>,
	"2":  <Icon component={MdVerified}/>,
};

export interface ILikeInlineProps {
	tooltip?: string;
	rating?: number | null;
	isLoading: boolean;
	disabled?: boolean;
	onRating: (rating: number | null) => void;
}

export const LikeInline: FC<ILikeInlineProps> = ({tooltip, rating, isLoading, onRating, disabled}) => {
	const {t} = useTranslation();

	return <Tooltip title={tooltip ? t(tooltip) : undefined}>
		<Rate
			defaultValue={(rating !== null && rating !== undefined) ? rating + 3 : undefined}
			character={({index}) => icons[(index || 0) - 2]}
			disabled={isLoading || disabled}
			onChange={value => {
				const $value = value - 3;
				onRating(rating === $value || value === 0 ? null : $value);
			}}
		/>
	</Tooltip>;
};
