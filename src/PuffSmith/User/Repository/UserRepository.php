<?php
declare(strict_types=1);

namespace PuffSmith\User\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use ClanCats\Hydrahon\Query\Sql\SelectBase;
use Dibi\Exception;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\Exception\RepositoryException;
use Edde\User\Repository\IUserRepository;
use Nette\Utils\Json;
use Nette\Utils\JsonException;
use Throwable;
use function in_array;
use function json_encode;

class UserRepository extends AbstractRepository implements IUserRepository {
	public function __construct() {
		parent::__construct();
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter UserFilterDto */
		$filter = $query->filter;
		$filter->fulltext && $this->fulltext($select, [
			'id',
			'name',
			'email',
		], $filter->fulltext);
		$filter->sites && $select->where(function (SelectBase $selectBase) use ($filter) {
			$selectBase->where('site', 'in', $filter->sites) && in_array('null', $filter->sites) && $selectBase->orWhereNull('site');
		});

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	/**
	 * @param string|null $login
	 *
	 * @return array|null
	 *
	 * @throws Exception
	 */
	public function findByLogin($login) {
		return $this->native("SELECT * FROM %n WHERE %or", $this->table, [
			'email' => $login,
			'id'    => $login,
		])->fetch();
	}

	/**
	 * @param $userId
	 * @param $settings
	 *
	 * @return array
	 *
	 * @throws RepositoryException
	 * @throws JsonException
	 * @throws Throwable
	 */
	public function updateSettings($userId, $settings) {
		return $this->patch([
			'id'       => $userId,
			'settings' => Json::encode($settings),
		]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'settings' => json_encode([
				'language' => $createDto->language,
				'date'     => 'LL',
				'datetime' => 'LLLL',
			]),
		]);
	}

	/**
	 * @param PatchDto $patchDto
	 *
	 * @return array
	 *
	 * @throws RepositoryException
	 * @throws Throwable
	 */
	public function update(PatchDto $patchDto) {
		return $this->patch([
			'id'    => $patchDto->id,
			'site'  => $patchDto->site,
			'email' => $patchDto->email,
		]);
	}
}
