<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto\Import;

use Edde\Dto\AbstractDto;

class AtomizerImportDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 * @description vendor name or an ID
	 */
	public string $vendor;
}
