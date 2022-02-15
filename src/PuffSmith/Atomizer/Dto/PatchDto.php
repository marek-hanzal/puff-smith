<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $vendorId;
	/**
	 * @var string[]
	 */
	public array $drawIds = [];
	/**
	 * @var string|null|void
	 */
	public ?string $typeId;
}
