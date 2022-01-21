<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Atomizer\Dto\AtomizerDto;

class BuildDto extends AbstractDto {
	public string $id;
	public string $name;
	public string $atomizerId;
	public AtomizerDto $atomizer;
}
