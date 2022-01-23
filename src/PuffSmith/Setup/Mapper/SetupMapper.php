<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;
use PuffSmith\Setup\Dto\SetupDto;

class SetupMapper extends AbstractMapper {
	use BuildRepositoryTrait;
	use BuildMapperTrait;
	use ModRepositoryTrait;
	use ModMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(SetupDto::class, [
			'id'          => $item->id,
			'name'        => $item->name,
			'description' => $item->description,
			'buildId'     => ($build = $this->buildRepository->find($item->build_id))->id,
			'build'       => $this->buildMapper->item($build),
			'modId'       => ($mod = $this->modRepository->find($item->mod_id))->id,
			'mod'         => $this->modMapper->item($mod),
			'created'     => $this->isoDateNull($item->created),
		]);
	}
}
