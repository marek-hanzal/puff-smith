package leight.client.sdk

class NamespacePart(val name: String) {
	val inner = mutableMapOf<String, NamespacePart>()
	val parts = mutableMapOf<String, (level: Int) -> String>()

	fun export(name: String, export: (level: Int) -> String) {
		parts[name] = export
	}

	fun inner(name: String, namespacePart: NamespacePart) {
		inner[name] = namespacePart
	}
}
