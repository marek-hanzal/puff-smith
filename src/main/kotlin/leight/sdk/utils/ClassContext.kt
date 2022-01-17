package leight.sdk.utils

import leight.sdk.annotation.TypeClass
import leight.rest.Endpoint
import leight.rest.IEndpoint
import leight.sdk.annotation.Module
import kotlin.reflect.KClass

data class ClassContext(
	val typeClass: TypeClass,
	val endpoint: Endpoint,
	val module: Module,
	val klazz: KClass<out IEndpoint>,
)
