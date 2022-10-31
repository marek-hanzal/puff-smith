import {
    MobileFormItem,
    TextArea,
    Translate
}           from "@leight-core/viv";
import {
    Form,
    Input
}           from "antd-mobile";
import {FC} from "react";

export interface ITranslationFieldsProps {
}

export const TranslationFields: FC<ITranslationFieldsProps> = () => {
	return <>
		<Form.Header>
			<Translate text={"shared.translation.form.common.header"}/>
		</Form.Header>
		<MobileFormItem field={"language"} required hasTooltip/>
		<MobileFormItem field={"label"} required hasTooltip>
			<Input autoFocus/>
		</MobileFormItem>
		<MobileFormItem field={"text"} required>
			<TextArea
				autoSize={{
					minRows: 6,
					maxRows: 6,
				}}
				bordered={false}
			/>
		</MobileFormItem>
	</>;
};
