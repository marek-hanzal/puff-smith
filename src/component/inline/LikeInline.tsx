import Icon from "@ant-design/icons";
import {ButtonBar} from "@leight-core/client";
import {Button, Divider, Spin} from "antd";
import {FC} from "react";
import {BsEmojiFrown, BsEmojiHeartEyes, BsEmojiSmile} from "react-icons/bs";

export interface ILikeInlineProps {
	rating?: number | null;
	onDislike: () => void;
	isLoading: boolean;
	onLike: () => void;
	onGodlike: () => void;
}

const DislikeButton: FC<ILikeInlineProps> = ({onDislike}) => <Button
	size={"large"}
	type={"link"}
	danger
	icon={<Icon component={BsEmojiFrown}/>}
	onClick={() => onDislike()}
/>;

const LikeButton: FC<ILikeInlineProps> = ({onLike}) => <Button
	size={"large"}
	type={"link"}
	icon={<Icon component={BsEmojiSmile}/>}
	onClick={() => onLike()}
/>;

const GodlikeButton: FC<ILikeInlineProps> = ({onGodlike}) => <Button
	size={"large"}
	type={"link"}
	icon={<Icon component={BsEmojiHeartEyes}/>}
	onClick={() => onGodlike()}
/>;

export const LikeInline: FC<ILikeInlineProps> = props => {
	return <ButtonBar split={<Divider type={"vertical"}/>}>
		<Spin delay={100} spinning={props.isLoading} indicator={<></>}>
			{((rating) => {
				switch (rating) {
					case undefined:
					case null:
						return [
							<DislikeButton key={"dislike"} {...props}/>,
							<LikeButton key={"like"} {...props}/>,
							<GodlikeButton key={"godlike"} {...props}/>,
						];
					case -1:
						return <DislikeButton {...props}/>;
					case 1 :
						return <LikeButton {...props}/>;
					case 2:
						return <GodlikeButton {...props}/>;
				}
			})(props.rating)}
		</Spin>
	</ButtonBar>;
};
