package ps.upgrade.u2021_08_19.storage.module.atomizer.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.upgrade.u2021_08_19.storage.module.enum.table.EnumTable

object AtomizerTypeTable : UUIDTable("atomizer-type") {
	val atomizer = reference("atomizer", AtomizerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val type = reference("type", EnumTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
