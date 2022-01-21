<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Mapper;

trait VendorMapperTrait {
	protected VendorMapper $vendorMapper;

	/**
	 * @Inject
	 *
	 * @param VendorMapper $vendorMapper
	 */
	public function setVendorMapper(VendorMapper $vendorMapper): void {
		$this->vendorMapper = $vendorMapper;
	}
}
