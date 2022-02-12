<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vendor\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Vendor\Dto\VendorDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

/**
 * @query vendorId
 */
class VendorEndpoint extends AbstractFetchEndpoint {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function get(): VendorDto {
		return $this->vendorMapper->item($this->vendorRepository->find($this->param('vendorId')));
	}
}
