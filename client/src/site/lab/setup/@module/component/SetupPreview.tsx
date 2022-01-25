import {SetupDto} from "@/sdk/puff-smith/setup/dto";
import {Preview} from "@leight-core/leight";
import {FC} from "react";
import {Space} from "antd";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import {ModInline} from "@/puff-smith/site/lab/mod";

export interface ISetupPreviewProps {
	setup: SetupDto
}

export const SetupPreview: FC<ISetupPreviewProps> = ({setup}) => {
	return <Preview translation={'lab.setup.preview'}>
		{{
			"name": <Space>
				<span>{setup.name}</span>
			</Space>,
			"description": <pre>
				{setup.description}
			</pre>,
			"atomizer": <AtomizerInline atomizer={setup.build.atomizer}/>,
			"mod": <ModInline mod={setup.mod}/>,
			"coil": <CoilInline coil={setup.build.coil}/>,
			"cotton": <CottonInline cotton={setup.build.cotton}/>,
			"ohm": setup.build.ohm.toFixed(2) + " ohm",
		}}
	</Preview>
}
