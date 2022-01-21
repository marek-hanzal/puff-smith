<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Repository;

trait VendorRepositoryTrait {
	/** @var VendorRepository */
	protected VendorRepository $vendorRepository;

	/**
	 * @Inject
	 *
	 * @param VendorRepository $vendorRepository
	 */
	public function setVendorRepository(VendorRepository $vendorRepository): void {
		$this->vendorRepository = $vendorRepository;
	}
}
