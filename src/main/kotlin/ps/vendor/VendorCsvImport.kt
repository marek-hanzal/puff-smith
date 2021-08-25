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
						code = get("code")
					}
				}
			} catch (e: ConflictException) {
				when (e.message) {
					"Unique conflict on [vendor.vendor_code_unique]." -> {
						storage.write(vendorRepository::exception) {
							vendorRepository.update(vendorRepository.findByCode(get("code")).id.value) {
								name = get("name")
								category = get("category")
							}
						}
					}
				}
			}
		}
	}
}

fun IContainer.lazyVendorCsvImport() = lazy<VendorCsvImport>()
