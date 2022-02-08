<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Dto;

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
	 * @var int
	 */
	public int $pg;
	/**
	 * @var int
	 */
	public int $vg;
	/**
	 * @var int
	 */
	public int $volume;
	/**
	 * @var string|null
	 */
	public ?string $description;
	/**
	 * @var string
	 */
	public string $vendorId;
}
