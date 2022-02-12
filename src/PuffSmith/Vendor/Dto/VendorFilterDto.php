<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class VendorFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null
	 */
	public ?string $name;
}
