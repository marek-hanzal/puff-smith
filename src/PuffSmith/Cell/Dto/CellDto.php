<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Dto;

use Edde\Dto\AbstractDto;
use Edde\Tag\Dto\TagDto;
use PuffSmith\Vendor\Dto\VendorDto;

class CellDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
	/** @var string */
	public string $typeId;
	/** @var TagDto */
	public TagDto $type;
	/** @var int */
	public int $drain;
	/** @var float */
	public float $voltage;
	/** @var float */
	public float $ohm;
	/** @var string */
	public string $vendorId;
	/** @var VendorDto */
	public VendorDto $vendor;
}
