<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Import;

trait VendorImportTrait {
	/** @var VendorImport */
	protected VendorImport $vendorImport;

	/**
	 * @Inject
	 *
	 * @param VendorImport $vendorImport
	 */
	public function setVendorImport(VendorImport $vendorImport): void {
		$this->vendorImport = $vendorImport;
	}
}
