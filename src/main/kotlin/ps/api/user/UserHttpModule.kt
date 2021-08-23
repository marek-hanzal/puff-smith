package ps.api.user

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.user.atomizer.AtomizerHttpModule
import ps.api.user.base.BaseHttpModule
import ps.api.user.battery.BatteryHttpModule
import ps.api.user.build.BuildHttpModule
import ps.api.user.cotton.CottonHttpModule
import ps.api.user.driptip.DriptipHttpModule
import ps.api.user.liquid.LiquidHttpModule
import ps.api.user.mod.ModHttpModule
import ps.api.user.ohm.OhmHttpModule
import ps.api.user.steeping.SteepingHttpModule
import ps.api.user.wire.WireHttpModule

/**
 * The main user-space application part (the business of this application).
 *
 * All registered users can use this module; if there is an exception, a user cannot use
 * the application at all.
 */
class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			AtomizerHttpModule::class,
			BatteryHttpModule::class,
			ModHttpModule::class,
			BaseHttpModule::class,
			LiquidHttpModule::class,
			BuildHttpModule::class,
			CottonHttpModule::class,
			DriptipHttpModule::class,
			SteepingHttpModule::class,
			WireHttpModule::class,
			OhmHttpModule::class,
		)
	}
}
