package leight.sdk

import leight.client.sdk.annotation.TypeArrayClass
import leight.client.sdk.annotation.TypeClass
import leight.client.sdk.annotation.TypeObjectIndex
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.IEndpoint
import leight.sdk.annotation.Data
import leight.sdk.annotation.Module
import leight.sdk.utils.ClassContext
import leight.sdk.utils.DataContext
import leight.sdk.utils.ExportContext
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class ClassExtractor(container: IContainer) : AbstractService(container) {
	private fun fromType(typeClass: TypeClass): Sequence<TypeClass> = sequence {
		if (typeClass.klass !== Unit::class) {
			yield(typeClass)
		}
		typeClass.klass.memberProperties.forEach { property ->
			property.findAnnotation<TypeArrayClass>()?.let {
				yieldAll(fromType(it.target))
				it.target.types.forEach { typeClass ->
					yieldAll(fromType(typeClass))
				}
			}
			property.findAnnotation<TypeObjectIndex>()?.let {
				yieldAll(fromType(it.target))
				it.target.types.forEach { typeClass ->
					yieldAll(fromType(typeClass))
				}
			}
			property.findAnnotation<TypeClass>()?.let {
				yieldAll(fromType(it))
				it.types.forEach { typeClass ->
					yieldAll(fromType(typeClass))
				}
			}
		}
	}

	fun toExport(classes: List<KClass<out IEndpoint>>) = sequence {
		classes.filter {
			it.findAnnotation<Module>() !== null &&
				it.findAnnotation<Endpoint>() !== null
		}.forEach { yield(ExportContext(it.findAnnotation()!!, it.findAnnotation()!!, it)) }
	}

	fun toDataExport(classes: List<KClass<out IEndpoint>>) = toExport(classes).filter { it.klazz.findAnnotation<Data>() !== null }.map { DataContext(it.endpoint, it.module, it.klazz.findAnnotation()!!, it.klazz) }

	fun toClassList(classes: List<KClass<out IEndpoint>>) = sequence {
		toExport(classes).forEach { export ->
			fromType(export.endpoint.request).forEach { classType ->
				classType.klass.findAnnotation<Module>()?.let { module ->
					yield(ClassContext(classType, export.endpoint, module, export.klazz))
				}
			}
			export.endpoint.request.types.forEach {
				fromType(it).forEach { classType ->
					classType.klass.findAnnotation<Module>()?.let { module ->
						yield(ClassContext(classType, export.endpoint, module, export.klazz))
					}
				}
			}
			fromType(export.endpoint.response).forEach {
				fromType(it).forEach { classType ->
					classType.klass.findAnnotation<Module>()?.let { module ->
						yield(ClassContext(classType, export.endpoint, module, export.klazz))
					}
				}
			}
			export.endpoint.response.types.forEach {
				fromType(it).forEach { classType ->
					classType.klass.findAnnotation<Module>()?.let { module ->
						yield(ClassContext(classType, export.endpoint, module, export.klazz))
					}
				}
			}
		}
	}.distinctBy { it.typeClass.klass }
}

fun IContainer.lazyClassExtractor() = lazy<ClassExtractor>()
