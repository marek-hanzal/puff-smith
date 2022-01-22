<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Vendor\Dto\VendorDto;

class CottonDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
	/** @var string|null */
	public ?string $description;
	/** @var string */
	public string $vendorId;
	/** @var VendorDto */
	public VendorDto $vendor;
}
