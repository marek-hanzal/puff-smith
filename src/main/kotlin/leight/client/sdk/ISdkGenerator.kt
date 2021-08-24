package leight.client.sdk

import leight.config.IConfigurable
import leight.container.IContainer
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

fun IContainer.lazySdkGenerator() = lazy<ISdkGenerator>()
