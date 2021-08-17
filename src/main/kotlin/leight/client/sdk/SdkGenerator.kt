package leight.client.sdk

import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkIndexProperty
import leight.client.sdk.property.SdkLiteralProperty
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.IHttpIndex
import leight.rest.IEndpoint
import leight.rest.IEndpointInfo
import kotlin.reflect.KClass
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazy<IHttpIndex>()
	private val endpointInfo by container.lazy<IEndpointInfo>()

	private fun filter(string: String): String = string
		.replace("api.", "")
		.replace("dto.", "")
		.replace("module.", "")

	private fun namespaceName(klass: KClass<*>): String = filter(klass.qualifiedName!!).replace("." + klass.simpleName!!, "")

	private fun exportProperty(klass: KClass<*>, property: KProperty<*>): String {
		var type = "any"
		property.findAnnotation<SdkLiteralProperty>()?.let {
			type = it.export
		}
		property.findAnnotation<SdkArrayProperty>()?.let {
			type = filter(it.target.qualifiedName!!).replace(namespaceName(klass) + ".", "") + "[]"
		}
		property.findAnnotation<SdkIndexProperty>()?.let {
			type = "{ [index in string]: " + filter(it.target.qualifiedName!!).replace(namespaceName(klass) + ".", "") + " }"
		}
		return property.name + ": " + type
	}

	private fun exportClass(klass: KClass<*>): String {
		return """export interface ${klass.simpleName!!} {
		${klass.memberProperties.joinToString("\n\t\t") { "${exportProperty(klass, it)};" }}
	}"""
	}

	private fun extractClasses(klass: KClass<*>): Array<KClass<*>> {
		var classes = arrayOf(klass)
		klass.memberProperties.forEach { property ->
			property.findAnnotation<SdkArrayProperty>()?.let {
				classes += it.target
				classes += extractClasses(it.target)
			}
			property.findAnnotation<SdkIndexProperty>()?.let {
				classes += it.target
				classes += extractClasses(it.target)
			}
		}
		return classes
	}

	private fun exportInterfaces(endpoints: List<KClass<out IEndpoint>>): String {
		var output = ""

		var classes = arrayOf<KClass<*>>()

		endpoints.forEach { endpoint ->
			endpoint.findAnnotation<Sdk>()?.let { sdk ->
				classes += extractClasses(sdk.response)
			}
		}

		val distinctClasses = classes.distinct()
		val namespaces = mutableMapOf<String, MutableList<String>>()
		distinctClasses.forEach { klass ->
			namespaces[namespaceName(klass)] = (namespaces[namespaceName(klass)] ?: mutableListOf()).also {
				it += exportClass(klass)
			}
		}

		namespaces.forEach { (t, u) ->
			output += """export namespace $t {
	${u.joinToString("\n\n\t")}
}

"""
		}

		return output
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		return arrayOf(
			exportInterfaces(endpoints),
		).joinToString("")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
