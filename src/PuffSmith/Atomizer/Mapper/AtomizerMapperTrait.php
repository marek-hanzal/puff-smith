<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Mapper;

trait AtomizerMapperTrait {
	protected AtomizerMapper $atomizerMapper;

	/**
	 * @Inject
	 *
	 * @param AtomizerMapper $atomizerMapper
	 */
	public function setAtomizerMapper(AtomizerMapper $atomizerMapper): void {
		$this->atomizerMapper = $atomizerMapper;
	}
}
