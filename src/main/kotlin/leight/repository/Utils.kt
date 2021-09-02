package leight.repository

import org.jetbrains.exposed.sql.Expression
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.Table

fun Table.uniqueIndices() = indices.filter { index -> index.unique }

fun orderByListOf(block: MutableList<Pair<Expression<*>, SortOrder>?>.() -> Unit) = mutableListOf<Pair<Expression<*>, SortOrder>?>().apply(block).filterNotNull().toTypedArray()

fun <T> Expression<T>.toOrderPair(order: Boolean) = Pair(this, if (order) SortOrder.ASC else SortOrder.DESC)
