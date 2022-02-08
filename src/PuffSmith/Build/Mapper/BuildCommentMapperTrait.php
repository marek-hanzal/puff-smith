<?php
declare(strict_types=1);

namespace PuffSmith\Build\Mapper;

trait BuildCommentMapperTrait {
	protected BuildCommentMapper $buildCommentMapper;

	/**
	 * @Inject
	 *
	 * @param BuildCommentMapper $buildCommentMapper
	 */
	public function setBuildCommentMapper(BuildCommentMapper $buildCommentMapper): void {
		$this->buildCommentMapper = $buildCommentMapper;
	}
}
