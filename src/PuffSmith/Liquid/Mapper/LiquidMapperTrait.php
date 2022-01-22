<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Mapper;

trait LiquidMapperTrait {
	protected LiquidMapper $liquidMapper;

	/**
	 * @Inject
	 *
	 * @param LiquidMapper $liquidMapper
	 */
	public function setLiquidMapper(LiquidMapper $liquidMapper): void {
		$this->liquidMapper = $liquidMapper;
	}
}
