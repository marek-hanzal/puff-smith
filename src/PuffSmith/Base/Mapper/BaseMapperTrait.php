<?php
declare(strict_types=1);

namespace PuffSmith\Base\Mapper;

trait BaseMapperTrait {
	protected BaseMapper $baseMapper;

	/**
	 * @Inject
	 *
	 * @param BaseMapper $baseMapper
	 */
	public function setBaseMapper(BaseMapper $baseMapper): void {
		$this->baseMapper = $baseMapper;
	}
}
