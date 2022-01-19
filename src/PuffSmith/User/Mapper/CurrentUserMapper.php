<?php
declare(strict_types=1);

namespace PuffSmith\User\Mapper;

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
	 * @throws JsonException
	 */
	protected function toUser($item, array $params = []): array {
		return [
			'id'       => $item->id,
			'name'     => $item->name,
			'email'    => $item->email,
			'site'     => $item->site,
			'settings' => $item->settings ? Json::decode($item->settings) : null,
		];
	}
}
