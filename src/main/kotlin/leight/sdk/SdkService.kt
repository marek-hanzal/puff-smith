package leight.sdk

import leight.container.AbstractService
import leight.container.IContainer
import leight.http.lazyHttpIndex
import leight.rest.IEndpoint
import leight.sdk.generator.lazyModuleGenerator
import java.io.BufferedOutputStream
import java.io.OutputStream
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream
import kotlin.reflect.KClass

/**
 * SDK service is used to generate client-side code (requires @leight-core/leight, react and TypeScript).
 */
class SdkService(container: IContainer) : AbstractService(container) {
	private val httpIndex by container.lazyHttpIndex()
	private val moduleGenerator by container.lazyModuleGenerator()

	fun generate(endpoints: List<KClass<out IEndpoint>>) = moduleGenerator.generate(endpoints)

	fun generate() = generate(httpIndex.endpointList())

	fun zip(outputStream: OutputStream) {
		ZipOutputStream(BufferedOutputStream(outputStream)).use { zip ->
			generate().forEach { (name, source) ->
				source.byteInputStream().use { input ->
					@Suppress("BlockingMethodInNonBlockingContext")
					zip.putNextEntry(ZipEntry("sdk/$name"))
					input.copyTo(zip)
				}
			}
		}
	}
}

fun IContainer.lazySdkService() = lazy<SdkService>()
