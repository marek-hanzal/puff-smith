package ps.storage.module.atomizer.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.storage.module.enum.table.EnumTable

object AtomizerPuffTable : UUIDTable("atomizer-puff") {
	val atomizer = reference("atomizer", AtomizerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val puff = reference("puff", EnumTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
