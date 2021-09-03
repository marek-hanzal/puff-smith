package leight.client.sdk

class NamespaceIndex {
	val namespacePart = NamespacePart("root")

	fun export(nameParts: List<String>, part: String, export: (level: Int) -> String?) {
		var current: NamespacePart = namespacePart
		nameParts.forEach { name ->
			current = (current.inner[name] ?: NamespacePart(name).also { current.inner(name, it) })
		}
		current.export(part, export)
	}
}
