<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Dto\Import;

use Edde\Dto\AbstractDto;

class LiquidImportDto extends AbstractDto {
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
}
