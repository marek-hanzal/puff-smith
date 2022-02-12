<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Dto;

use Edde\Dto\AbstractDto;

class WireImportDto extends AbstractDto {
	public string $name;
	public ?string $description;
	public string $vendor;
	public ?string $ga;
}
