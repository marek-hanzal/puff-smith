<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Dto;

use Edde\Dto\AbstractDto;

/**
 * Ensure DTO for ensuring a vendor exists.
 */
class EnsureDto extends AbstractDto {
	/**
	 * @var string
	 * @description vendor name
	 */
	public string $name;
}
