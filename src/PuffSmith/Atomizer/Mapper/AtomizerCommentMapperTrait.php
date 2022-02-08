<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Mapper;

trait AtomizerCommentMapperTrait {
	protected AtomizerCommentMapper $atomizerCommentMapper;

	/**
	 * @Inject
	 *
	 * @param AtomizerCommentMapper $atomizerCommentMapper
	 */
	public function setAtomizerCommentMapper(AtomizerCommentMapper $atomizerCommentMapper): void {
		$this->atomizerCommentMapper = $atomizerCommentMapper;
	}
}
