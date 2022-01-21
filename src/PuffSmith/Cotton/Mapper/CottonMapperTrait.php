<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Mapper;

trait CottonMapperTrait {
	protected CottonMapper $cottonMapper;

	/**
	 * @Inject
	 *
	 * @param CottonMapper $cottonMapper
	 */
	public function setCottonMapper(CottonMapper $cottonMapper): void {
		$this->cottonMapper = $cottonMapper;
	}
}
