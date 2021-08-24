package leight.rest

import leight.config.IConfigurable
import leight.container.IContainer
import kotlin.reflect.KClass

/**
 * A little service used to provide various info about an Endpoint.
 */
interface IEndpointInfo : IConfigurable {
	/**
	 * Set base package name being removed from all identifiers.
	 */
	fun base(name: String)

	fun getId(endpoint: KClass<out IEndpoint>): String
	fun getId(endpoint: IEndpoint): String = getId(endpoint::class)

	fun getUrl(endpoint: KClass<out IEndpoint>) = "/api/" + getId(endpoint).trimStart('.').replace(".", "/")
	fun getUrl(endpoint: IEndpoint) = getUrl(endpoint::class)
}

fun IContainer.lazyEndpointInfo() = lazy<IEndpointInfo>()
