package ps.upgrade.u2021_08_19.storage.module.translation.table

import org.jetbrains.exposed.dao.id.UUIDTable

/**
 * As a modern app, this one needs translations too: tadaaa!
 */
object TranslationTable : UUIDTable("translation") {
	/**
	 * Language code of the translation; could be arbitrary short string. Should be an ISO code, but whatever.
	 */
	val language = varchar("language", 32)

	/**
	 * Label of the translation; could be basically any sized text (this is the reason why hash on this table exists).
	 */
	val label = text("label")

	/**
	 * Hash is computed value of the label used as a unique key; this is useful to keep labels arbitrary long while still being
	 * "unique".
	 */
	val hash = varchar("hash", 128)

	/**
	 * The translation text itself.
	 */
	val text = text("text").nullable()

	init {
		/**
		 * Unique is based just on the language code and hash as the other values are not suitable for uniqueness.
		 */
		uniqueIndex("translation_unique", language, hash)
	}
}
