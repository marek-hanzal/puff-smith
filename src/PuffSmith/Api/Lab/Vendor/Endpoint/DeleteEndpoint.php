<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vendor\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Vendor\Dto\VendorDto;
use PuffSmith\Vendor\Dto\DeleteDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function post(DeleteDto $deleteDto): VendorDto {
		return $this->vendorMapper->item($this->vendorRepository->delete($deleteDto->id));
	}
}
