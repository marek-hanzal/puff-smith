import Icon from "@ant-design/icons";
import {IWithIdentity} from "@leight-core/api";
import {ButtonBar} from "@leight-core/client";
import {Button, Divider, Spin} from "antd";
import {FC} from "react";
import {BsEmojiFrown, BsEmojiHeartEyes, BsEmojiSmile} from "react-icons/bs";
import {UseMutationResult} from "react-query";

export interface ILikeDislikeInlineProps {
	id: string;
	rating?: number | null;
	mutator: UseMutationResult<any, any, IWithIdentity & { rating?: number | null; }>;
	onSuccess?: () => Promise<any>;
}

const DislikeButton: FC<ILikeDislikeInlineProps> = ({id, mutator, rating, onSuccess}) => <Button
	size={"large"}
	type={"link"}
	danger
	icon={<Icon component={BsEmojiFrown}/>}
	onClick={() => {
		mutator.mutate({rating: rating ? null : -1, id}, {
			onSuccess,
		});
	}}
/>;

const LikeButton: FC<ILikeDislikeInlineProps> = ({id, mutator, rating, onSuccess}) => <Button
	size={"large"}
	type={"link"}
	icon={<Icon component={BsEmojiSmile}/>}
	onClick={() => {
		mutator.mutate({rating: rating ? null : 1, id}, {
			onSuccess,
		});
	}}
/>;

const GodlikeButton: FC<ILikeDislikeInlineProps> = ({id, mutator, rating, onSuccess}) => <Button
	size={"large"}
	type={"link"}
	icon={<Icon component={BsEmojiHeartEyes}/>}
	onClick={() => {
		mutator.mutate({rating: rating ? null : 2, id}, {
			onSuccess,
		});
	}}
/>;

export const LikeDislikeInline: FC<ILikeDislikeInlineProps> = props => {
	return <ButtonBar split={<Divider type={"vertical"}/>}>
		<Spin delay={100} spinning={props.mutator.isLoading} indicator={<></>}>
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
