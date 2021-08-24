package ps.translation

import leight.container.AbstractService
import leight.container.IContainer
import leight.repository.ConflictException
import leight.storage.IStorage
import leight.utils.sha256
import org.apache.commons.csv.CSVFormat
import org.apache.commons.csv.CSVParser
import ps.storage.module.translation.repository.TranslationRepository

class TranslationCsvImport(container: IContainer) : AbstractService(container) {
	private val storage by container.lazy<IStorage>()
	private val translationRepository by container.lazy<TranslationRepository>()

	fun import(resource: String) {
		CSVParser(
			javaClass.classLoader.getResourceAsStream(resource)?.reader(),
			CSVFormat.DEFAULT.builder()
				.setHeader()
				.setTrim(true)
				.setAllowDuplicateHeaderNames(false)
				.setAllowMissingColumnNames(false)
				.setDelimiter(';')
				.build()
		).forEach { csvRecord ->
			try {
				storage.write(translationRepository::exception) {
					translationRepository.create {
						language = csvRecord.get("language")
						label = csvRecord.get("label")
						text = csvRecord.get("text")
						hash = label.sha256()
					}
				}
			} catch (e: ConflictException) {
				storage.write(translationRepository::exception) {
					translationRepository.update(translationRepository.findByLanguageAndLabel(csvRecord.get("language"), csvRecord.get("label")).id.value) {
						text = csvRecord.get("text")
						hash = label.sha256()
					}
				}
			}
		}
	}
}
