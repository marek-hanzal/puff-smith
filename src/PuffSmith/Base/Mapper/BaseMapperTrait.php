<?php
declare(strict_types=1);

namespace PuffSmith\Base\Mapper;

trait BaseMapperTrait {
	protected BaseMapper $boosterMapper;

	/**
	 * @Inject
	 *
	 * @param BaseMapper $boosterMapper
	 */
	public function setBaseMapper(BaseMapper $boosterMapper): void {
		$this->boosterMapper = $boosterMapper;
	}
}
