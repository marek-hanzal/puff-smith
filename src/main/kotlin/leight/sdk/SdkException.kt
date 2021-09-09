package leight.sdk

import leight.LeightException

open class SdkException(message: String, cause: Throwable? = null) : LeightException(message, cause)
