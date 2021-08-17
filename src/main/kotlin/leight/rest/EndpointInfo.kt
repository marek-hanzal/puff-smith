package leight.rest

import leight.container.IContainer
import kotlin.reflect.KClass

class EndpointInfo(container: IContainer) : AbstractEndpointInfo(container) {
	private var base: String = ""

	override fun base(name: String) {
		this.base = name
	}

	override fun getId(endpoint: KClass<out IEndpoint>): String = endpoint.qualifiedName!!
		.replace("$base.", "")
		.replace("api.", "")
		.replace("module.", "")
		.replace("endpoint.", "")
		.replace("Endpoint", "")
		.lowercase()
}
