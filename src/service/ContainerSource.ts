import {CodeService} from "@/puff-smith/service/code/CodeService";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {UserTokenSource} from "@/puff-smith/service/user/token/UserTokenSource";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {VendorSource} from "@/puff-smith/service/vendor/VendorSource";
import {ISource} from "@leight-core/api";
import {AbstractSource} from "@leight-core/server";

/**
 * CIRCULAR DEPENDENCY HERE .....
 */

export abstract class ContainerSource<TSource extends ISource<any, any, any>> extends AbstractSource<TSource> {
	readonly codeService = CodeService();

	get tagSource() {
		return TagSource().ofSource(this);
	}

	get vendorSource() {
		return VendorSource().ofSource(this);
	}

	get userSource() {
		return UserSource().ofSource(this);
	}

	get tokenSource() {
		return TokenSource().ofSource(this);
	}

	get userTokenSource() {
		return UserTokenSource().ofSource(this);
	}
}
