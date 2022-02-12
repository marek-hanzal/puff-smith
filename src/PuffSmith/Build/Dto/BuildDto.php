<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Driptip\Dto\DriptipDto;

class BuildDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var float|null */
	public ?float $ohm;
	/** @var string */
	public string $created;
	/** @var bool */
	public bool $active;
	/** @var string|null|void */
	public ?string $disabledOn;

	/** @var string */
	public string $atomizerId;
	/** @var AtomizerDto */
	public AtomizerDto $atomizer;
	/** @var string|null */
	public ?string $driptipId;
	/** @var DriptipDto|null */
	public ?DriptipDto $driptip;

	/** @var string */
	public string $coilId;
	/** @var CoilDto */
	public CoilDto $coil;
	/** @var int */
	public int $coils;

	/** @var string */
	public string $cottonId;
	/** @var CottonDto */
	public CottonDto $cotton;
}
