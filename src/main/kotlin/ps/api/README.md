# Api

Besides, it's strange name maybe does not suggest an HTTP API, in this case is meant by that:
Application interface on the highest level, so in this case all HTTP endpoints in the application.

## Idea

Idea of the application is split it into "Sites" which are basically kind of micro-applications - like public site (for non-logged users), root site (for low-level system admins)
and user site itself which includes main public business logic (for registered users).

There could be more sites as for example there could be role managing some stuff of the app not requiring full access to the system.
