<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Mapper;

trait WireMapperTrait {
	protected WireMapper $wireMapper;

	/**
	 * @Inject
	 *
	 * @param WireMapper $wireMapper
	 */
	public function setWireMapper(WireMapper $wireMapper): void {
		$this->wireMapper = $wireMapper;
	}
}
