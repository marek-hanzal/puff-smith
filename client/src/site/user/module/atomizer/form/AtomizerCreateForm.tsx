import {AtomizerIcon, ps} from "@/ps";
import {VendorSelect} from "@/ps/site/user/module/vendor";
import {Centered, Form, FormItem, IFormProps, Submit, SwitchItem} from "@leight-core/leight";
import {InputNumber} from "antd";
import {FC} from "react";

const doCreate = ps.user.atomizer.doCreate;
type CreateDto = ps.user.atomizer.CreateDto;
type AtomizerDto = ps.atomizer.AtomizerDto;

export interface IAtomizerCreateFormProps extends Partial<IFormProps<CreateDto, AtomizerDto>> {
}

export const AtomizerCreateForm: FC<IAtomizerCreateFormProps> = props => {
	return <Form<CreateDto, AtomizerDto>
		post={doCreate}
		{...props}
	>
		<FormItem field={"name"} labels={["user.atomizer.name.label"]} required/>
		<FormItem field={"code"} labels={["user.atomizer.code.label"]} required/>
		<FormItem field={"vendorId"} labels={["user.atomizer.vendor.label"]} required>
			<VendorSelect category={"atomizer"}/>
		</FormItem>
		<FormItem field={"coils"} labels={["user.atomizer.coils.label"]}>
			<InputNumber
				step={1}
				min={0}
				max={4}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"capacity"} labels={["user.atomizer.capacity.label"]}>
			<InputNumber
				step={0.5}
				min={0}
				max={14}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"maxWraps"} labels={["user.atomizer.max-wraps.label"]}>
			<InputNumber
				step={1}
				min={0}
				max={12}
				style={{width: "100%"}}
			/>
		</FormItem>
		<SwitchItem field={"squonk"} labels={["user.atomizer.squonk.label"]}/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} size={"large"} label={"user.atomizer.create.label"}/>
		</Centered>
	</Form>;
};
