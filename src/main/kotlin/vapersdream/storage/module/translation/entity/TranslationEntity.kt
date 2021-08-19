package vapersdream.storage.module.translation.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import vapersdream.storage.module.translation.table.TranslationTable
import java.util.*

class TranslationEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<TranslationEntity>(TranslationTable)

	var language by TranslationTable.language
	var label by TranslationTable.label
	var hash by TranslationTable.hash
	var text by TranslationTable.text
}
