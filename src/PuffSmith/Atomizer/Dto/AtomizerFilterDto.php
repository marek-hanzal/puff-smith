<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class AtomizerFilterDto extends AbstractFilterDto {
	/** @var string|null|void */
	public ?string $name;
}
