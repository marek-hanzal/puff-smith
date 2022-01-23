<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Mapper;

trait ModMapperTrait {
	protected ModMapper $modMapper;

	/**
	 * @Inject
	 *
	 * @param ModMapper $modMapper
	 */
	public function setModMapper(ModMapper $modMapper): void {
		$this->modMapper = $modMapper;
	}
}
