import {FC} from "react";
import {Input, Space} from "antd";
import {signIn} from "next-auth/react";
import {Form, FormItem, ISubmitProps, Submit} from "@leight-core/client";
import {MailOutlined} from "@ant-design/icons";

export interface IEmailButtonProps extends Partial<ISubmitProps> {
}

export const EmailButton: FC<IEmailButtonProps> = props => {
	return <Form
		layout={'inline'}
		onSuccess={async ({values: {email}}) => await signIn('email', {email, callbackUrl: '/'})}
		translation={'public.sign-in'}
	>
		<Space align={'baseline'}>
			<FormItem field={'email'} required showLabel={false}>
				<Input type={'email'} prefix={<MailOutlined/>}/>
			</FormItem>
			<Submit
				type={'primary'}
				size={'large'}
				ghost
				label={'email.button'}
				{...props}
			/>
		</Space>
	</Form>;
}
