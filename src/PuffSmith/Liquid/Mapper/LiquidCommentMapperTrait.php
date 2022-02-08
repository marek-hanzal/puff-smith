<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Mapper;

trait LiquidCommentMapperTrait {
	protected LiquidCommentMapper $liquidCommentMapper;

	/**
	 * @Inject
	 *
	 * @param LiquidCommentMapper $liquidCommentMapper
	 */
	public function setLiquidCommentMapper(LiquidCommentMapper $liquidCommentMapper): void {
		$this->liquidCommentMapper = $liquidCommentMapper;
	}
}
