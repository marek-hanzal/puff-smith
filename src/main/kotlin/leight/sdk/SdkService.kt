package leight.sdk

import leight.container.AbstractService
import leight.container.IContainer
import leight.http.lazyHttpIndex
import leight.rest.IEndpoint
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

	fun generate(endpoints: List<KClass<out IEndpoint>>): Map<String, String> {
		return mapOf(
			"atomizer/index.tsx" to "import leight",
			"atomizer/atomizer.tsx" to "import leight",
			"mod/mod.tsx" to "import leight",
			"mod/index.tsx" to "import leight",
		)
	}

	fun generate() = generate(httpIndex.endpointList())

	fun zip(outputStream: OutputStream) {
		ZipOutputStream(BufferedOutputStream(outputStream)).use { zip ->
			generate().map { (name, source) ->
				source.byteInputStream().use { input ->
					@Suppress("BlockingMethodInNonBlockingContext")
					zip.putNextEntry(ZipEntry(name))
					input.copyTo(zip)
				}
			}
		}
	}
}

fun IContainer.lazySdkService() = lazy<SdkService>()
