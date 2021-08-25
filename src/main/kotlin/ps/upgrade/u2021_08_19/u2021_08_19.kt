package ps.upgrade.u2021_08_19

import leight.container.IContainer
import leight.encryption.lazyPasswordService
import leight.upgrade.AbstractUpgrade
import org.jetbrains.exposed.sql.SchemaUtils
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerPuffTable
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerTable
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerTypeTable
import ps.upgrade.u2021_08_19.storage.module.enum.table.EnumTable
import ps.upgrade.u2021_08_19.storage.module.mod.table.ModBatteryTable
import ps.upgrade.u2021_08_19.storage.module.mod.table.ModTable
import ps.upgrade.u2021_08_19.storage.module.role.entity.RoleEntity
import ps.upgrade.u2021_08_19.storage.module.role.repository.lazyRoleRepository
import ps.upgrade.u2021_08_19.storage.module.role.table.RoleTable
import ps.upgrade.u2021_08_19.storage.module.session.table.TicketTable
import ps.upgrade.u2021_08_19.storage.module.translation.table.TranslationTable
import ps.upgrade.u2021_08_19.storage.module.user.entity.UserEntity
import ps.upgrade.u2021_08_19.storage.module.user.table.UserRoleTable
import ps.upgrade.u2021_08_19.storage.module.user.table.UserTable
import ps.upgrade.u2021_08_19.storage.module.vendor.table.VendorTable

class u2021_08_19(container: IContainer) : AbstractUpgrade(container) {
	private val passwordService by container.lazyPasswordService()
	private val roleRepository by container.lazyRoleRepository()

	override fun upgrade() {
		storage.write {
			SchemaUtils.create(
				UserTable,
				RoleTable,
				UserRoleTable,
				TicketTable,
				TranslationTable,
				EnumTable,
				VendorTable,
				AtomizerTypeTable,
				AtomizerPuffTable,
				ModBatteryTable,
				AtomizerTable,
				ModTable,
			)
		}
		storage.write {
			/**
			 * Default (mandatory) root role.
			 */
			RoleEntity.new {
				name = "root"
			}
			/**
			 * Default (mandatory) application user role.
			 */
			RoleEntity.new {
				name = "user"
			}
			UserEntity.new {
				login = "root"
				password = passwordService.encrypt("root")
				site = "root"
				roles = roleRepository.findByName("root")
			}
			UserEntity.new {
				login = "user"
				password = passwordService.encrypt("user")
				site = "user"
				roles = roleRepository.findByName("user")
			}
		}
	}
}
