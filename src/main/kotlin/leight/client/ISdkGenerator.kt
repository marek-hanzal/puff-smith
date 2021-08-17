package leight.client

import leight.config.IConfigurable
import leight.rest.IEndpoint
import kotlin.reflect.KClass

interface ISdkGenerator : IConfigurable {
	/**
	 * Generate just provided list of endpoints.
	 */
	fun generate(endpoints: List<KClass<out IEndpoint>>): String

	/**
	 * Generate endpoints from the IHttpIndex.
	 */
	fun generate(): String
}
