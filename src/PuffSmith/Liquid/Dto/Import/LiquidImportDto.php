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
	 * @var string
	 */
	public string $pg = '0';
	/**
	 * @var string
	 */
	public string $vg = '0';
	/**
	 * @var string
	 */
	public string $volume;
	/**
	 * @var string|null
	 */
	public ?string $description;
	/**
	 * @var string
	 */
	public string $vendor;
}
