<?php
declare(strict_types=1);

namespace PuffSmith\User\Mapper;

use Dibi\Exception;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
use Edde\User\Mapper\AbstractCurrentUserMapper;
use Nette\Utils\Json;
use Nette\Utils\JsonException;

/**
 * Mapper used to provide data of current user (could be more information than for
 * regular user).
 *
 * @Injectable(lazy=true)
 */
class CurrentUserMapper extends AbstractCurrentUserMapper {
	/**
	 * @param       $item
	 * @param array $params
	 *
	 * @return array
	 *
	 * @throws Exception
	 * @throws ItemException
	 * @throws SkipException
	 * @throws JsonException
	 */
	protected function toUser($item, array $params = []): array {
		return [
			'id'       => (string)$item->recno,
			'name'     => $item->name,
			'email'    => $item->email,
			'site'     => 'public',
			'settings' => $item->settings ? Json::decode($item->settings) : null,
		];
	}
}
