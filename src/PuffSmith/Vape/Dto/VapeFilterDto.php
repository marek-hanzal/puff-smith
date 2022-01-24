<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class VapeFilterDto extends AbstractFilterDto {
	/**
	 * @var int|null|void
	 * @description Filter vapes by an atomizer
	 */
	public ?int $atomizerId;
}
