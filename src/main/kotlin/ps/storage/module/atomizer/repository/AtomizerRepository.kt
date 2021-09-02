package ps.storage.module.atomizer.repository

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeNullBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.storage.module.atomizer.entity.AtomizerEntity
import ps.storage.module.atomizer.table.AtomizerTable

@Serializable
data class AtomizerOrderBy(
	@TypeNullBool(optional = true)
	val name: Boolean? = null,
	@TypeNullBool(optional = true)
	val code: Boolean? = null,
)

class AtomizerRepository(container: IContainer) : AbstractRepository<AtomizerTable, AtomizerEntity, AtomizerOrderBy>(AtomizerTable, AtomizerEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: AtomizerOrderBy?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
	}
}

fun IContainer.lazyAtomizerRepository() = lazy<AtomizerRepository>()
