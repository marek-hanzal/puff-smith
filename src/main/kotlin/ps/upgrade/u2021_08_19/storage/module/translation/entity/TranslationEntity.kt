package ps.upgrade.u2021_08_19.storage.module.translation.entity

import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import ps.upgrade.u2021_08_19.storage.module.translation.table.TranslationTable

class TranslationEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<TranslationEntity>(TranslationTable)

	var language by TranslationTable.language
	var label by TranslationTable.label
	var hash by TranslationTable.hash
	var text by TranslationTable.text
}
