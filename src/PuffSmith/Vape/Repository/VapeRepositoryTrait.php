<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

trait VapeRepositoryTrait {
	protected VapeRepository $vapeRepository;

	/**
	 * @Inject
	 *
	 * @param VapeRepository $vapeRepository
	 */
	public function setVapeRepository(VapeRepository $vapeRepository): void {
		$this->vapeRepository = $vapeRepository;
	}
}
