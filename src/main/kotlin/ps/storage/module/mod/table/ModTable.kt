package ps.storage.module.mod.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.storage.module.user.table.UserTable
import ps.storage.module.vendor.table.VendorTable

object ModTable : UUIDTable("mod") {
	/**
	 * Common name of the mod (like Luna from Asmodus)
	 */
	val name = varchar("name", 64)

	/**
	 * Who crafted this piece of magical thing?
	 */
	val vendor = reference("vendor", VendorTable, ReferenceOption.RESTRICT, ReferenceOption.RESTRICT)

	/**
	 * Unique code for this mod (could be used for example in imports).
	 */
	val code = varchar("code", 32).uniqueIndex("mod_code_unique")

	/**
	 * Has a mod 510 standard connector?
	 */
	val with510 = bool("with510").default(true)

	/**
	 * Is this mod a pod mod?
	 */
	val pod = bool("pod").default(false)

	/**
	 * Is this mod a squonkie-donkie mod?
	 */
	val squonk = bool("squonk").default(false)

	/**
	 * Is this mod a mechanical one?
	 */
	val mechanical = bool("mechanical").default(false)

	/**
	 * Is this mod a bypass-only?
	 */
	val bypass = bool("bypass").default(false)

	/**
	 * Number of batteries a mod can handle.
	 */
	val batteries = integer("batteries")

	/**
	 * Capacity of integrated batteries (if any).
	 */
	val capacity = integer("capacity").nullable()

	/**
	 * Maximum power of this mod (in Watts).
	 */
	val power = integer("power")

	/**
	 * How good internal electronics of this mod is (percentage 0-100).
	 */
	val efficiency = integer("efficiency").nullable()

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
