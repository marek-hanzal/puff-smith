<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Driptip\Dto\DriptipDto;
use PuffSmith\Mod\Dto\ModDto;

class SetupDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string|null
	 */
	public ?string $description;
	/**
	 * @var string
	 */
	public string $driptipId;
	/**
	 * @var DriptipDto
	 */
	public DriptipDto $driptip;
	/**
	 * @var string
	 */
	public string $buildId;
	/**
	 * @var BuildDto
	 */
	public BuildDto $build;
	/**
	 * @var string
	 */
	public string $modId;
	/**
	 * @var ModDto
	 */
	public ModDto $mod;
	/**
	 * @var string
	 */
	public string $created;
}
