<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Mapper;

trait SetupMapperTrait {
	protected SetupMapper $setupMapper;

	/**
	 * @Inject
	 *
	 * @param SetupMapper $setupMapper
	 */
	public function setSetupMapper(SetupMapper $setupMapper): void {
		$this->setupMapper = $setupMapper;
	}
}
