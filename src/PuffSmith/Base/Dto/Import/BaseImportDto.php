<?php
declare(strict_types=1);

namespace PuffSmith\Base\Dto\Import;

use Edde\Dto\AbstractDto;

class BaseImportDto extends AbstractDto {
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
	public string $vendor;
}
