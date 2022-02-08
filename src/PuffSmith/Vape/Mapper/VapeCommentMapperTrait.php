<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Mapper;

trait VapeCommentMapperTrait {
	protected VapeCommentMapper $vapeCommentMapper;

	/**
	 * @Inject
	 *
	 * @param VapeCommentMapper $vapeCommentMapper
	 */
	public function setVapeCommentMapper(VapeCommentMapper $vapeCommentMapper): void {
		$this->vapeCommentMapper = $vapeCommentMapper;
	}
}
