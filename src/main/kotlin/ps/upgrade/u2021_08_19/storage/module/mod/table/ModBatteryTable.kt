package ps.upgrade.u2021_08_19.storage.module.mod.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.upgrade.u2021_08_19.storage.module.enum.table.EnumTable

object ModBatteryTable : UUIDTable("mod-battery") {
	val mod = reference("mod", ModTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val battery = reference("enum", EnumTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
