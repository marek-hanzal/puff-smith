package ps.enum

import leight.container.IContainer
import leight.import.AbstractImportService
import leight.repository.ConflictException
import ps.storage.module.enum.repository.lazyEnumRepository

class EnumCsvImport(container: IContainer) : AbstractImportService(container) {
	private val enumRepository by container.lazyEnumRepository()

	override fun import(resource: String) {
		csv(resource) {
			try {
				storage.write(enumRepository::exception) {
					enumRepository.create {
						label = get("label")
						code = get("code")
						category = get("category")
					}
				}
			} catch (e: ConflictException) {
				when (e.message) {
					"Unique conflict on [enum.enum_code_unique]." -> {
						storage.write(enumRepository::exception) {
							enumRepository.update(enumRepository.findByCode(get("code")).id.value) {
								label = get("label")
								category = get("category")
							}
						}
					}
				}
			}
		}
	}
}

fun IContainer.lazyEnumCsvImport() = lazy<EnumCsvImport>()
