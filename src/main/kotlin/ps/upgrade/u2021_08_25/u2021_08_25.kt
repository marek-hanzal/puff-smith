package ps.upgrade.u2021_08_25

import leight.container.IContainer
import leight.upgrade.AbstractUpgrade
import org.jetbrains.exposed.sql.SchemaUtils
import ps.upgrade.u2021_08_25.storage.module.mod.table.ModTable
import ps.upgrade.u2021_08_25.storage.module.vendor.table.VendorTable

class u2021_08_25(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.write {
			SchemaUtils.create(
				VendorTable,
				ModTable,
			)
		}
	}
}
