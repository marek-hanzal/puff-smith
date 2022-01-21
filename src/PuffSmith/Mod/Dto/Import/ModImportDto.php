<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Dto\Import;

use Edde\Dto\AbstractDto;

class ModImportDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $vendor;
}
