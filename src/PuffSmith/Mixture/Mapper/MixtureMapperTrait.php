<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Mapper;

trait MixtureMapperTrait {
	protected MixtureMapper $mixtureMapper;

	/**
	 * @Inject
	 *
	 * @param MixtureMapper $mixtureMapper
	 */
	public function setMixtureMapper(MixtureMapper $mixtureMapper): void {
		$this->mixtureMapper = $mixtureMapper;
	}
}
