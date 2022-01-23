<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Mapper;

trait DriptipMapperTrait {
	protected DriptipMapper $driptipMapper;

	/**
	 * @Inject
	 *
	 * @param DriptipMapper $driptipMapper
	 */
	public function setDriptipMapper(DriptipMapper $driptipMapper): void {
		$this->driptipMapper = $driptipMapper;
	}
}
