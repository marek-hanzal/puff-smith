import Icon from "@ant-design/icons";
import {numbersOf} from "@leight-core/utils";
import {Radio, Tooltip} from "antd";
import {ComponentProps, FC} from "react";
import {useTranslation} from "react-i18next";
import {MdDeleteOutline, MdOutlineThumbsUpDown, MdThumbDownOffAlt, MdThumbUpOffAlt, MdVerified} from "react-icons/md";

export interface ILikeInlineProps extends Partial<ComponentProps<typeof Radio["Group"]>> {
	tooltip?: string;
	rating?: number | null;
	isLoading: boolean;
	onRating: (rating: number | null) => void;
}

export const LikeInline: FC<ILikeInlineProps> = ({tooltip, rating, isLoading, onRating, disabled, ...props}) => {
	const {t} = useTranslation();

	const map: any = {
		"-2": MdDeleteOutline,
		"-1": MdThumbDownOffAlt,
		"0": MdOutlineThumbsUpDown,
		"1": MdThumbUpOffAlt,
		"2": MdVerified,
	};

	return <Tooltip title={tooltip ? t(tooltip) : undefined}>
		<Radio.Group
			value={rating}
			disabled={isLoading || disabled}
			size={"large"}
			{...props}
		>
			{numbersOf(5).map(i => {
				const $value = i - 2;
				return <Radio.Button
					key={$value}
					value={$value}
					onClick={() => onRating(rating === $value ? null : $value)}
				>
					<Icon component={map[$value]}/>
				</Radio.Button>;
			})}
		</Radio.Group>
	</Tooltip>;
};
