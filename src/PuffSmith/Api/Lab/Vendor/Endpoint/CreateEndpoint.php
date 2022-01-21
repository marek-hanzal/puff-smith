<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vendor\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Vendor\Dto\Create\CreateDto;
use PuffSmith\Vendor\Dto\VendorDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function post(CreateDto $createDto): VendorDto {
		return $this->vendorMapper->item($this->vendorRepository->create($createDto));
	}
}
