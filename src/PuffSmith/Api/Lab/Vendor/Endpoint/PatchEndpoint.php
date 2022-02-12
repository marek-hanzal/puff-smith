<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vendor\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Vendor\Dto\VendorDto;
use PuffSmith\Vendor\Dto\PatchDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function patch(PatchDto $patchDto): VendorDto {
		return $this->vendorMapper->item($this->vendorRepository->update($patchDto));
	}
}
