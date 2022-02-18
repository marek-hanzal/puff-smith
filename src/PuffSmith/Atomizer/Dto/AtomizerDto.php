<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Dto\AbstractDto;
use Edde\Tag\Dto\TagDto;
use PuffSmith\Vendor\Dto\VendorDto;

class AtomizerDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
	/** @var string */
	public string $vendorId;
	/** @var VendorDto */
	public VendorDto $vendor;
	/**
	 * @var TagDto[]
	 */
	public array $draws = [];
	/**
	 * @var string[]
	 */
	public array $drawIds = [];
	/**
	 * @var string|null|void
	 */
	public ?string $typeId;
	/**
	 * @var TagDto|null|void
	 */
	public ?TagDto $type;
	/**
	 * @var float|null|void
	 */
	public ?float $coilMin;
	/**
	 * @var float|null|void
	 */
	public ?float $coilMax;
	/**
	 * @var bool
	 */
	public bool $dual;
}
