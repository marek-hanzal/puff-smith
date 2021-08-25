package ps.upgrade.u2021_08_19.storage.module.enum.table

import org.jetbrains.exposed.dao.id.UUIDTable

object EnumTable : UUIDTable("enum") {
	val label = varchar("label", 64)
	val code = varchar("code", 32).uniqueIndex("enum_code_unique")
	val category = varchar("category", 32)

	init {
		uniqueIndex("enum_label_category_unique", label, category)
	}
}
