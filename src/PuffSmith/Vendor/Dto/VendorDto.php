<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Dto;

use Edde\Dto\AbstractDto;

class VendorDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
}
