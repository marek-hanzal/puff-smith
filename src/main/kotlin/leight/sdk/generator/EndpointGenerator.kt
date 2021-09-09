package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.EndpointMethod
import leight.rest.lazyEndpointInfo
import leight.sdk.utils.ExportContext

class EndpointGenerator(container: IContainer) : AbstractService(container) {
	private val genericGenerator by container.lazyGenericGenerator()
	private val endpointInfo by container.lazyEndpointInfo()

	fun generate(exportContext: ExportContext): String = exportContext.klazz.simpleName!!.let { name ->
		when (exportContext.endpoint.method) {
			EndpointMethod.GET -> {
				"export const do${name}Fetch = createGet<${genericGenerator.exportExpandedClass(exportContext.endpoint.response)}>(\"${endpointInfo.getId(exportContext.klazz)}\")"
			}
			EndpointMethod.POST -> {
				"export const do${name} = createPost<${genericGenerator.exportExpandedClass(exportContext.endpoint.request)}, ${genericGenerator.exportExpandedClass(exportContext.endpoint.response)}>(\"${
					endpointInfo.getId(
						exportContext.klazz
					)
				}\")"
			}
			EndpointMethod.PATCH -> {
				"export const do${name} = createPatch<${genericGenerator.exportExpandedClass(exportContext.endpoint.request)}, ${genericGenerator.exportExpandedClass(exportContext.endpoint.response)}>(\"${
					endpointInfo.getId(
						exportContext.klazz
					)
				}\")"
			}
			EndpointMethod.PUT -> {
				"export const do${name} = createPut<${genericGenerator.exportExpandedClass(exportContext.endpoint.request)}, ${genericGenerator.exportExpandedClass(exportContext.endpoint.response)}>(\"${
					endpointInfo.getId(
						exportContext.klazz
					)
				}\")"
			}
			EndpointMethod.DELETE -> {
				"export const do${name} = createDelete<${genericGenerator.exportExpandedClass(exportContext.endpoint.response)}>(\"${endpointInfo.getId(exportContext.klazz)}\")"
			}
		}.let { "$it;" }
	}
}

fun IContainer.lazyEndpointGenerator() = lazy<EndpointGenerator>()
