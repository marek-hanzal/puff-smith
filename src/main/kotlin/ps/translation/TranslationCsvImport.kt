package ps.translation

import leight.container.IContainer
import leight.import.AbstractImportService
import leight.repository.ConflictException
import leight.utils.sha256
import ps.storage.module.translation.repository.lazyTranslationRepository

class TranslationCsvImport(container: IContainer) : AbstractImportService(container) {
	private val translationRepository by container.lazyTranslationRepository()

	override fun import(resource: String) {
		csv(resource) {
			try {
				storage.write(translationRepository::exception) {
					translationRepository.create {
						language = get("language")
						label = get("label")
						text = get("text")
						hash = label.sha256()
					}
				}
			} catch (e: ConflictException) {
				storage.write(translationRepository::exception) {
					translationRepository.update(translationRepository.findByLanguageAndLabel(get("language"), get("label")).id.value) {
						text = get("text")
						hash = label.sha256()
					}
				}
			}
		}
	}
}

fun IContainer.lazyTranslationCsvImport() = lazy<TranslationCsvImport>()
