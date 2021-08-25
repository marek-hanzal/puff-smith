package ps.storage.module.atomizer.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.storage.module.enum.table.EnumTable

object AtomizerTypeTable : UUIDTable("atomizer-type") {
	val atomizer = reference("atomizer", AtomizerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val type = reference("type", EnumTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
