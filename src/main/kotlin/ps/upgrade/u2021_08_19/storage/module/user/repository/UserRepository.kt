package ps.upgrade.u2021_08_19.storage.module.user.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.upgrade.u2021_08_19.storage.module.user.entity.UserEntity
import ps.upgrade.u2021_08_19.storage.module.user.table.UserTable

class UserRepository(container: IContainer) : AbstractRepository<UserTable, UserEntity>(UserTable, UserEntity, container)
