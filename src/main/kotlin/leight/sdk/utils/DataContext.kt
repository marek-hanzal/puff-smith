package leight.sdk.utils

import leight.rest.Endpoint
import leight.rest.IEndpoint
import leight.sdk.annotation.Data
import leight.sdk.annotation.Module
import kotlin.reflect.KClass

data class DataContext(
	val endpoint: Endpoint,
	val module: Module,
	val data: Data,
	val klazz: KClass<out IEndpoint>,
)
