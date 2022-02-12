<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Dto;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string|null
	 */
	public ?string $description;
	/**
	 * @var string
	 */
	public string $vendorId;
	/**
	 * @var int|null
	 */
	public ?int $ga;
}