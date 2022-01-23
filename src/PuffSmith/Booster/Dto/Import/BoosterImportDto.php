<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Dto\Import;

use Edde\Dto\AbstractDto;

class BoosterImportDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $pg;
	/**
	 * @var string
	 */
	public string $vg;
	/**
	 * @var string
	 */
	public string $nicotine;
	/**
	 * @var string
	 */
	public string $volume;
	/**
	 * @var string
	 */
	public string $vendor;
}
