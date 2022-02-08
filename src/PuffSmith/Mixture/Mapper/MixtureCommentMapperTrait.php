<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Mapper;

trait MixtureCommentMapperTrait {
	protected MixtureCommentMapper $mixtureCommentMapper;

	/**
	 * @Inject
	 *
	 * @param MixtureCommentMapper $mixtureCommentMapper
	 */
	public function setMixtureCommentMapper(MixtureCommentMapper $mixtureCommentMapper): void {
		$this->mixtureCommentMapper = $mixtureCommentMapper;
	}
}
