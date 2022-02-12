<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Mapper;

trait CellMapperTrait {
	protected CellMapper $cellMapper;

	/**
	 * @Inject
	 *
	 * @param CellMapper $cellMapper
	 */
	public function setCellMapper(CellMapper $cellMapper): void {
		$this->cellMapper = $cellMapper;
	}
}
