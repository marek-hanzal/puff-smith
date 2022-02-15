<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Dto;

use Edde\Dto\AbstractDto;

class CellImportDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $drain;
	/**
	 * @var string
	 */
	public string $type;
	/**
	 * @var string
	 */
	public string $voltage;
	/**
	 * @var string
	 */
	public string $vendor;
}
