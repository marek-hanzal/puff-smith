import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {ISource} from "@leight-core/api";
import {AbstractSource} from "@leight-core/server";

export abstract class ContainerSource<TSource extends ISource<any, any, any>> extends AbstractSource<TSource> {
	readonly codeService = CodeService();

	get tagSource() {
		return TagSource().ofSource(this);
	}

	get vendorSource() {
		return VendorSource().ofSource(this);
	}
}
