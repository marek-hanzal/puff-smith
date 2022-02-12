<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Dto;

use Edde\Dto\AbstractDto;

class CottonImportDto extends AbstractDto {
	public string $name;
	public ?string $description;
	public string $vendor;
}
