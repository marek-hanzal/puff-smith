<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Dto;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $vendorId;
}
