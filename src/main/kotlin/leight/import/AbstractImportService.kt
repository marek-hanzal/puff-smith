package leight.import

import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.lazyStorage
import org.apache.commons.csv.CSVFormat
import org.apache.commons.csv.CSVParser
import org.apache.commons.csv.CSVRecord

abstract class AbstractImportService(container: IContainer) : AbstractService(container), IImportService {
	protected val storage by container.lazyStorage()

	override fun csv(resource: String, block: CSVRecord.() -> Unit) {
		CSVParser(
			javaClass.classLoader.getResourceAsStream(resource)?.reader(),
			CSVFormat.DEFAULT.builder()
				.setHeader()
				.setTrim(true)
				.setIgnoreEmptyLines(true)
				.setNullString("")
				.setAllowDuplicateHeaderNames(false)
				.setAllowMissingColumnNames(false)
				.setDelimiter(';')
				.build()
		).forEach(block)
	}
}
