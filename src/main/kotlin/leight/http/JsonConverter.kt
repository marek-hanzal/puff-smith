package leight.http

import com.google.gson.Gson
import io.ktor.application.*
import io.ktor.content.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.serialization.*
import io.ktor.util.pipeline.*
import io.ktor.utils.io.*
import io.ktor.utils.io.charsets.*
import io.ktor.utils.io.core.*
import kotlinx.serialization.*
import kotlinx.serialization.json.Json
import kotlin.text.Charsets

@ExperimentalSerializationApi
class JsonConverter constructor(
	private val format: SerialFormat,
	private val defaultCharset: Charset = Charsets.UTF_8,
	private val gson: Gson = Gson(),
) : ContentConverter {
	constructor(
		format: StringFormat,
		defaultCharset: Charset = Charsets.UTF_8
	) : this(format as SerialFormat, defaultCharset)

	init {
		require(format is BinaryFormat || format is StringFormat) {
			"Only binary and string formats are supported, " +
				"$format is not supported."
		}
	}

	override suspend fun convertForReceive(context: PipelineContext<ApplicationReceiveRequest, ApplicationCall>): Any? {
		val request = context.subject
		val channel = request.value as? ByteReadChannel ?: return null
		val charset = context.call.request.contentCharset() ?: defaultCharset

		val serializer = format.serializersModule.serializer(request.typeInfo)
		val contentPacket = channel.readRemaining()

		return when (format) {
			is StringFormat -> format.decodeFromString(serializer, contentPacket.readText(charset))
			is BinaryFormat -> format.decodeFromByteArray(serializer, contentPacket.readBytes())
			else -> {
				contentPacket.discard()
				error("Unsupported format $format")
			}
		}
	}

	override suspend fun convertForSend(context: PipelineContext<Any, ApplicationCall>, contentType: ContentType, value: Any) = TextContent(gson.toJson(value), contentType.withCharset(context.call.suitableCharset()))
}

@ExperimentalSerializationApi
fun ContentNegotiation.Configuration.json(
	json: Json = DefaultJson,
	contentType: ContentType = ContentType.Application.Json
) {
	register(
		contentType,
		JsonConverter(json)
	)
}
