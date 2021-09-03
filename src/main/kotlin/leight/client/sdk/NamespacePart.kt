package leight.client.sdk

class NamespacePart(val name: String) {
	val inner = mutableMapOf<String, NamespacePart>()
	val exports = mutableMapOf<String, IExport>()

	fun export(name: String, export: IExport) {
		exports[name] = export
	}

	fun inner(name: String, namespacePart: NamespacePart) {
		inner[name] = namespacePart
	}
}
