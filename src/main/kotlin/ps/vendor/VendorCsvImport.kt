package ps.vendor

import leight.container.IContainer
import leight.import.AbstractImportService
import leight.repository.ConflictException
import ps.storage.module.vendor.repository.lazyVendorRepository

class VendorCsvImport(container: IContainer) : AbstractImportService(container) {
	private val vendorRepository by container.lazyVendorRepository()

	override fun import(resource: String) {
		csv(resource) {
			try {
				storage.write(vendorRepository::exception) {
					vendorRepository.create {
						name = get("name")
						category = get("category")
					}
				}
			} catch (e: ConflictException) {
				// swallow one - on the import we don't care; also do not pollute logs
			}
		}
	}
}

fun IContainer.lazyVendorCsvImport() = lazy<VendorCsvImport>()
