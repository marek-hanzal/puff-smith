<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/** @var string */
	public string $name;
	/** @var string|null */
	public ?string $description;
	/** @var string */
	public string $vendorId;
}
