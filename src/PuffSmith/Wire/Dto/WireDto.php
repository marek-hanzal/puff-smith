<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Vendor\Dto\VendorDto;

class WireDto extends AbstractDto {
	public string $id;
	public string $name;
	public ?string $descirption;
	public ?int $ga;
	public string $vendorId;
	public VendorDto $vendor;
}
