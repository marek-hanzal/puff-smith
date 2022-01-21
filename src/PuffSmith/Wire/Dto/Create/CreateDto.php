<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	public string $name;
	public ?string $description;
	public string $vendorId;
	public ?int $ga;
}
