package leight.repository

import org.jetbrains.exposed.sql.Table

fun Table.uniqueIndices() = indices.filter { index -> index.unique }
