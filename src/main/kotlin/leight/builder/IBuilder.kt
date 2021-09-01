package leight.builder

interface IBuilder<TTarget> {
	fun build(): TTarget
}
