import {ITranslation} from "@leight-core/api";
import {
	ITemplateProps,
	PlainText,
	Preview,
	Template
}                     from "@leight-core/client";
import {Divider}      from "antd";
import {FC}           from "react";

export interface ITranslationViewProps extends Partial<ITemplateProps> {
	translation: ITranslation;
}

export const TranslationView: FC<ITranslationViewProps> = ({translation, ...props}) => {
	return <Template
		title={translation.key}
		subTitle={translation.language}
		extra={<Divider/>}
		{...props}
	>
		<Preview
			name={"translation"}
			translation={"root.translation.view"}
		>
			{[
				{
					name:  "info",
					items: {
						content:  <PlainText>
									  {translation.value}
								  </PlainText>,
						language: translation.language,
						key:      translation.key,
					},
				},
			]}
		</Preview>
	</Template>;
};
