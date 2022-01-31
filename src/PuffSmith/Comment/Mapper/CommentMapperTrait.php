<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Mapper;

trait CommentMapperTrait {
	protected CommentMapper $commentMapper;

	/**
	 * @Inject
	 *
	 * @param CommentMapper $commentMapper
	 */
	public function setCommentMapper(CommentMapper $commentMapper): void {
		$this->commentMapper = $commentMapper;
	}
}
