<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Vendor\Dto\VendorDto;

class AtomizerDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
	/** @var string */
	public string $vendorId;
	/** @var VendorDto */
	public VendorDto $vendor;
}
