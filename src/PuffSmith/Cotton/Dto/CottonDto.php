<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Vendor\Dto\VendorDto;

class CottonDto extends AbstractDto {
	public string $id;
	public string $name;
	public ?string $description;
	public string $vendorId;
	public VendorDto $vendor;
}
