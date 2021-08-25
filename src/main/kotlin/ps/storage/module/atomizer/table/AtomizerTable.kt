package ps.storage.module.atomizer.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.storage.module.vendor.table.VendorTable

object AtomizerTable : UUIDTable("atomizer") {
	/**
	 * Common name of the atomizer (like Luna from Vicious Ant).
	 */
	val name = varchar("name", 64)

	/**
	 * Who crafted this piece of magical thing?
	 */
	val vendor = reference("vendor", VendorTable, ReferenceOption.RESTRICT, ReferenceOption.RESTRICT)

	/**
	 * Is this atomizer squonk-enabled?
	 */
	val squonk = bool("squonk").default(false)

	/**
	 * The size of base of an atomizer (in mm).
	 */
	val base = integer("base")
}
