package leight.http

import leight.config.IConfigurable
import leight.rest.IEndpoint
import kotlin.reflect.KClass

/**
 * Just a simple registry of created HTTP modules and endpoints.
 */
interface IHttpIndex : IConfigurable {
	fun <T : IHttpModule> module(klass: KClass<T>)

	fun <T : IEndpoint> endpoint(klass: KClass<T>)

	fun modules(): Map<String, KClass<out IHttpModule>>

	fun endpoints(): Map<String, KClass<out IEndpoint>>
}
