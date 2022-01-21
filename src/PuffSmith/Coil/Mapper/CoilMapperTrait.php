<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Mapper;

trait CoilMapperTrait {
	protected CoilMapper $coilMapper;

	/**
	 * @Inject
	 *
	 * @param CoilMapper $coilMapper
	 */
	public function setCoilMapper(CoilMapper $coilMapper): void {
		$this->coilMapper = $coilMapper;
	}
}
