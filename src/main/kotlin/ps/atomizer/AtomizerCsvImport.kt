package ps.atomizer

import leight.container.IContainer
import leight.import.AbstractImportService
import leight.repository.ConflictException
import org.jetbrains.exposed.sql.SizedCollection
import ps.storage.module.atomizer.repository.lazyAtomizerRepository
import ps.storage.module.enum.repository.lazyEnumRepository
import ps.storage.module.user.repository.lazyUserRepository
import ps.storage.module.vendor.repository.lazyVendorRepository

class AtomizerCsvImport(container: IContainer) : AbstractImportService(container) {
	private val userRepository by container.lazyUserRepository()
	private val atomizerRepository by container.lazyAtomizerRepository()
	private val vendorRepository by container.lazyVendorRepository()
	private val enumRepository by container.lazyEnumRepository()

	override fun import(resource: String) {
		val userId = storage.read { userRepository.findByLogin("root").id }
		csv(resource) {
			try {
				storage.write(atomizerRepository::exception) {
					atomizerRepository.create {
						code = get("code")
						name = get("name")
						vendor = vendorRepository.findByCode(get("vendor")).id
						coils = get("coils")?.toInt() ?: 1
						capacity = get("capacity")?.toFloatOrNull()
						squonk = get("squonk")?.toBoolean() ?: false
						base = get("base").toInt()
						maxWraps = get("maxWraps")?.toInt()
						maxCoilSize = get("maxCoilSize")?.toInt()
						createdBy = userId
						approvedBy = userId
					}.apply {
						type = SizedCollection(get("type")?.split(',')?.map(enumRepository::findByCode) ?: listOf())
						puff = SizedCollection(get("puff")?.split(',')?.map(enumRepository::findByCode) ?: listOf())
					}
				}
			} catch (e: ConflictException) {
				when (e.message) {
					"Unique conflict on [atomizer.atomizer_code_unique]." -> {
						storage.write(atomizerRepository::exception) {
							atomizerRepository.update(atomizerRepository.findByCode(get("code")).id.value) {
								name = get("name")
								vendor = vendorRepository.findByCode(get("vendor")).id
								coils = get("coils")?.toInt() ?: 1
								capacity = get("capacity")?.toFloatOrNull()
								squonk = get("squonk")?.toBoolean() ?: false
								base = get("base").toInt()
								type = SizedCollection(get("type")?.split(',')?.map(enumRepository::findByCode) ?: listOf())
								puff = SizedCollection(get("puff")?.split(',')?.map(enumRepository::findByCode) ?: listOf())
								maxWraps = get("maxWraps")?.toInt()
								maxCoilSize = get("maxCoilSize")?.toInt()
								updatedBy = userId
								approvedBy = userId
							}
						}
					}
				}
			}
		}
	}
}

fun IContainer.lazyAtomizerCsvImport() = lazy<AtomizerCsvImport>()
