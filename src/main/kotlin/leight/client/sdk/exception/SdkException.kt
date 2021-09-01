package leight.client.sdk.exception

import leight.LeightException

open class SdkException(message: String, cause: Throwable? = null) : LeightException(message, cause)
