package leight.utils

import org.joda.time.DateTime
import org.joda.time.format.ISODateTimeFormat

fun DateTime.asDate(): String = this.toString("YYYY-MM-dd")

fun DateTime.asStamp(): String = this.toString("YYYY-MM-dd HH:mm:ss.SSS")

fun DateTime.asIso(): String = this.toLocalDateTime().toString(ISODateTimeFormat.dateTime())
