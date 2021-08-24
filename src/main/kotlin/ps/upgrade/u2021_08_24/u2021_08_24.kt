package ps.upgrade.u2021_08_24

import leight.container.IContainer
import leight.upgrade.AbstractUpgrade
import ps.translation.TranslationCsvImport

class u2021_08_24(container: IContainer) : AbstractUpgrade(container) {
	private val translationCsvImport by container.lazy<TranslationCsvImport>()

	override fun upgrade() {
		translationCsvImport.import("upgrade/u2021_08_24/translations.csv")
	}
}
