package vapersdream.upgrade.u2021_08_19

import leight.container.IContainer
import leight.encryption.IPasswordService
import leight.upgrade.AbstractUpgrade
import org.jetbrains.exposed.sql.SchemaUtils
import vapersdream.upgrade.u2021_08_19.storage.module.role.entity.RoleEntity
import vapersdream.upgrade.u2021_08_19.storage.module.role.table.RoleTable
import vapersdream.upgrade.u2021_08_19.storage.module.session.table.TicketTable
import vapersdream.upgrade.u2021_08_19.storage.module.translation.table.TranslationTable
import vapersdream.upgrade.u2021_08_19.storage.module.user.entity.UserEntity
import vapersdream.upgrade.u2021_08_19.storage.module.user.table.UserRoleTable
import vapersdream.upgrade.u2021_08_19.storage.module.user.table.UserTable

class u2021_08_19(container: IContainer) : AbstractUpgrade(container) {
	private val passwordService by container.lazy<IPasswordService>()

	override fun upgrade() {
		storage.write {
			SchemaUtils.create(
				UserTable,
				RoleTable,
				UserRoleTable,
				TicketTable,
				TranslationTable,
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
				roles = RoleEntity.find { RoleTable.name eq "root" }
			}
			UserEntity.new {
				login = "user"
				password = passwordService.encrypt("user")
				site = "user"
				roles = RoleEntity.find { RoleTable.name eq "user" }
			}
		}
	}
}
