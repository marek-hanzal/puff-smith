package ps.mod

import leight.container.IContainer
import leight.import.AbstractImportService
import leight.repository.ConflictException
import org.jetbrains.exposed.sql.SizedCollection
import ps.storage.module.enum.repository.lazyEnumRepository
import ps.storage.module.mod.repository.lazyModRepository
import ps.storage.module.user.repository.lazyUserRepository
import ps.storage.module.vendor.repository.lazyVendorRepository

class ModCsvImport(container: IContainer) : AbstractImportService(container) {
	private val userRepository by container.lazyUserRepository()
	private val modRepository by container.lazyModRepository()
	private val vendorRepository by container.lazyVendorRepository()
	private val enumRepository by container.lazyEnumRepository()

	override fun import(resource: String) {
		val userId = storage.read { userRepository.findByLogin("root").id }
		csv(resource) {
			try {
				storage.write(modRepository::exception) {
					modRepository.create {
						name = get("name")
						vendor = vendorRepository.findByCode(get("vendor")).id
						code = get("code")
						with510 = get("with510")?.toBoolean() ?: true
						pod = get("pod")?.toBoolean() ?: false
						squonk = get("squonk")?.toBoolean() ?: true
						mechanical = get("mechanical")?.toBoolean() ?: false
						bypass = get("bypass")?.toBoolean() ?: false
						batteries = get("batteries")?.toInt() ?: 1
						capacity = get("capacity")?.toInt()
						power = get("power").toFloat()
						efficiency = get("efficiency")?.toInt()
						createdBy = userId
						approvedBy = userId
					}.apply {
						battery = SizedCollection(get("battery")?.split(',')?.map(enumRepository::findByCode)?.toList() ?: listOf())
					}
				}
			} catch (e: ConflictException) {
				when (e.message) {
					"Unique conflict on [mod.mod_code_unique]." -> {
						storage.write(modRepository::exception) {
							modRepository.update(modRepository.findByCode(get("code")).id.value) {
								name = get("name")
								vendor = vendorRepository.findByCode(get("vendor")).id
								with510 = get("with510")?.toBoolean() ?: true
								pod = get("pod")?.toBoolean() ?: false
								squonk = get("squonk")?.toBoolean() ?: true
								mechanical = get("mechanical")?.toBoolean() ?: false
								bypass = get("bypass")?.toBoolean() ?: false
								batteries = get("batteries")?.toInt() ?: 1
								capacity = get("capacity")?.toInt()
								power = get("power").toFloat()
								efficiency = get("efficiency")?.toInt()
								battery = SizedCollection(get("battery")?.split(',')?.map(enumRepository::findByCode)?.toList() ?: listOf())
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

fun IContainer.lazyModCsvImport() = lazy<ModCsvImport>()
