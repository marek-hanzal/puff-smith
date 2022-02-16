<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Dto;

use Edde\Dto\AbstractDto;

class WireImportDto extends AbstractDto {
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
	public string $vendor;
	/**
	 * @var string|null
	 */
	public ?string $ga;
	/**
	 * @var string|null
	 */
	public ?string $tc;
}
