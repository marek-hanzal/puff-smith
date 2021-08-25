package leight.import

import leight.config.IConfigurable
import org.apache.commons.csv.CSVRecord

interface IImportService : IConfigurable {
	fun import(resource: String)

	fun csv(resource: String, block: CSVRecord.() -> Unit)
}
