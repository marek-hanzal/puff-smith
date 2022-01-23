<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Mapper;

trait VapeMapperTrait {
	protected VapeMapper $vapeMapper;

	/**
	 * @Inject
	 *
	 * @param VapeMapper $vapeMapper
	 */
	public function setVapeMapper(VapeMapper $vapeMapper): void {
		$this->vapeMapper = $vapeMapper;
	}
}
