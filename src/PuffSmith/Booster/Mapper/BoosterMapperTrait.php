<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Mapper;

trait BoosterMapperTrait {
	protected BoosterMapper $boosterMapper;

	/**
	 * @Inject
	 *
	 * @param BoosterMapper $boosterMapper
	 */
	public function setBoosterMapper(BoosterMapper $boosterMapper): void {
		$this->boosterMapper = $boosterMapper;
	}
}
