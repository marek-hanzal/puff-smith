package vapersdream.storage.module.user.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import vapersdream.storage.module.user.entity.UserEntity
import vapersdream.storage.module.user.table.UserTable

class UserRepository(container: IContainer) : AbstractRepository<UserTable, UserEntity>(UserTable, UserEntity, container)
