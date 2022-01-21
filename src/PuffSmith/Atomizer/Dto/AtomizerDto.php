<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Vendor\Dto\VendorDto;

class AtomizerDto extends AbstractDto {
	public string $id;
	public string $name;
	public string $vendorId;
	public VendorDto $vendor;
}
