package leight.http

import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass

class HttpIndex(container: IContainer) : AbstractService(container), IHttpIndex {
	private val modules = mutableMapOf<String, KClass<out IHttpModule>>()
	private val endpoints = mutableMapOf<String, KClass<out IEndpoint>>()

	override fun <T : IHttpModule> module(klass: KClass<T>) {
		modules[klass.qualifiedName!!] = klass
	}

	override fun <T : IEndpoint> endpoint(klass: KClass<T>) {
		endpoints[klass.qualifiedName!!] = klass
	}

	override fun modules(): Map<String, KClass<out IHttpModule>> = modules.toMap()

	override fun endpoints(): Map<String, KClass<out IEndpoint>> = endpoints.toMap()
}
