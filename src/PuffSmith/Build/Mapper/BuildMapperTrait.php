<?php
declare(strict_types=1);

namespace PuffSmith\Build\Mapper;

trait BuildMapperTrait {
	protected BuildMapper $buildMapper;

	/**
	 * @Inject
	 *
	 * @param BuildMapper $buildMapper
	 */
	public function setBuildMapper(BuildMapper $buildMapper): void {
		$this->buildMapper = $buildMapper;
	}
}
