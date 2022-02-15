<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Dto;

use Edde\Dto\AbstractDto;

class ModImportDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string|null
	 * @description maximum power a mod can supplement
	 */
	public ?string $power;
	/**
	 * @var string|null
	 */
	public ?string $voltage;
	/**
	 * @var string
	 */
	public string $vendor;
}
