<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Dto;

use Edde\Dto\AbstractDto;
use Edde\Tag\Dto\TagDto;
use PuffSmith\Vendor\Dto\VendorDto;

class ModDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var int|null
	 */
	public ?int $power;
	/**
	 * @var float|null
	 */
	public ?float $voltage;
	/**
	 * @var string
	 */
	public string $vendorId;
	/**
	 * @var VendorDto
	 */
	public VendorDto $vendor;
	/**
	 * @var TagDto[]
	 */
	public array $cellTypes = [];
	/**
	 * @var string[]
	 */
	public array $cellTypeIds = [];
}
