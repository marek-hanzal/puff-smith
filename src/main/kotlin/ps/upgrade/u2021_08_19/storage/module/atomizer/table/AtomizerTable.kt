package ps.upgrade.u2021_08_19.storage.module.atomizer.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.upgrade.u2021_08_19.storage.module.user.table.UserTable
import ps.upgrade.u2021_08_19.storage.module.vendor.table.VendorTable

object AtomizerTable : UUIDTable("atomizer") {
	/**
	 * Common name of the atomizer (like Luna from Vicious Ant).
	 */
	val name = varchar("name", 64)

	/**
	 * A code used for example for imports; must be unique.
	 */
	val code = varchar("code", 32).uniqueIndex("atomizer_code_unique")

	/**
	 * Who crafted this piece of magical thing?
	 */
	val vendor = reference("vendor", VendorTable, ReferenceOption.RESTRICT, ReferenceOption.RESTRICT)

	/**
	 * Number of coils this atomizer can handle.
	 */
	val coils = integer("coils").default(1)

	/**
	 * Maximum coil size in mm (for example 25 is 2.5 mm).
	 */
	val maxCoilSize = integer("maxCoilSize").nullable()

	/**
	 * Maximum number of (sensible) coil wraps (in common).
	 */
	val maxWraps = integer("maxWraps").nullable()

	/**
	 * A capacity of an atomizer.
	 */
	val capacity = float("capacity").nullable()

	/**
	 * Is this atomizer squonk-enabled?
	 */
	val squonk = bool("squonk").default(false)

	/**
	 * The size of base of an atomizer (in mm).
	 */
	val base = integer("base")

	/**
	 * Who created this atomizer.
	 */
	val createdBy = reference("createdBy", UserTable, ReferenceOption.RESTRICT, ReferenceOption.RESTRICT)

	/**
	 * Who altered this atomizer.
	 */
	val updatedBy = reference("updatedBy", UserTable, ReferenceOption.RESTRICT, ReferenceOption.RESTRICT).nullable()

	/**
	 * Who approved this atomizer (thus making it generally available).
	 */
	val approvedBy = reference("approvedBy", UserTable, ReferenceOption.RESTRICT, ReferenceOption.RESTRICT).nullable()
}
