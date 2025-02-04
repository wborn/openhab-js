# Changelog

## to be released

| Type        | Namespace | Description                                 | Reference                                                                                               | Breaking |
|-------------|-----------|---------------------------------------------|---------------------------------------------------------------------------------------------------------|----------|

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/10).

## 3.1.0

| Type        | Namespace | Description                                 | Reference                                                                                               | Breaking |
|-------------|-----------|---------------------------------------------|---------------------------------------------------------------------------------------------------------|----------|
| Enhancement | `utils`   | Support all data types in `dumpObject`      | Commit [144e6a9](https://github.com/openhab/openhab-js/commit/144e6a9c58982f45a07bf704ac0bd18fa6c3a54d) | No       |
| Enhancement | `cache`   | Reimplementation to use the new core caches | [#191](https://github.com/openhab/openhab-js/pull/191)                                                  | No       |

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/9).

## 3.0.0

| Type        | Namespace | Description                                                         | Reference                                                                                                | Breaking |
|-------------|-----------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------|
| Enhancement | `items`   | ItemHistory: Change return types of min/max between/since to number | [#175](https://github.com/openhab/openhab-js/pull/175)                                                   | **Yes**  |
| Cleanup     | `rules`   | Remove unused rule providers                                        | [#183](https://github.com/openhab/openhab-js/pull/183)                                                   | **Yes**  |
| Enhancement | `actions` | Add Transformation actions as a class with arg type checking        | [#180](https://github.com/openhab/openhab-js/pull/180)                                                   | No       |
| Cleanup     |           | Remove unused & non-working providers                               | Commit [83dac55d](https://github.com/openhab/openhab-js/commit/83dac55d67099494661d9bbee9cd0a58cca3e2b0) | No       |

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/8).

## 2.1.1

| Type        | Namespace | Description                                                | Reference                                              | Breaking |
|-------------|-----------|------------------------------------------------------------|--------------------------------------------------------|----------|
| Enhancement | `actions` | Don't deprecate `ScriptExecution.createTimer`              | [#171](https://github.com/openhab/openhab-js/pull/171) | No       |

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/7).

## 2.1.0

| Type        | Namespace | Description                                                | Reference                                              | Breaking |
|-------------|-----------|------------------------------------------------------------|--------------------------------------------------------|----------|
| Enhancement | `items`   | Add semantics to the `Item` class                          | [#167](https://github.com/openhab/openhab-js/pull/167) | No       |
| Docs        |           | Timer polyfills now behave like standard JS                | [#169](https://github.com/openhab/openhab-js/pull/169) | No       |
| Docs        |           | Remove raw Java timer creation methods & openHAB Timer     | [#169](https://github.com/openhab/openhab-js/pull/169) | No       |
| Bugfix      | `actions` | Warn when the raw Java timer creation methods are accessed | [#169](https://github.com/openhab/openhab-js/pull/169) | No       |

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/6).

# 2.0.4

| Type   | Namespace | Description                                     | Reference                                              | Breaking |
|--------|-----------|-------------------------------------------------|--------------------------------------------------------|----------|
| Docs   |           | Update timer docs                               | [#161](https://github.com/openhab/openhab-js/pull/161) | No       |
| Bugfix | `actions` | Fix `get()`, `thingActions()` & dynamic exports | [#165](https://github.com/openhab/openhab-js/pull/165) | No       |


Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/5).

## 2.0.3

| Type        | Namespace  | Description                                                              | Reference                                              | Breaking |
|-------------|------------|--------------------------------------------------------------------------|--------------------------------------------------------|----------|
| Enhancement | `triggers` | Add DateTime Trigger                                                     | [#154](https://github.com/openhab/openhab-js/pull/154) | No       |
| Enhancement | `items`    | ItemHistory: Add missing methods & Enable type defs                      | [#158](https://github.com/openhab/openhab-js/pull/158) | No       |
| Docs        | `actions`  | Update docs for naming timers                                            | [#160](https://github.com/openhab/openhab-js/pull/160) | No       |


Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/4).

## 2.0.2

| Type        | Namespace | Description                                                              | Reference                                              | Breaking |
|-------------|-----------|--------------------------------------------------------------------------|--------------------------------------------------------|----------|
| Bugfix      | `time`    | `isBetweenTimes` fails with: TypeError: `time.toZDT` is not a function   | [#151](https://github.com/openhab/openhab-js/pull/151) | No       |
| Enhancement | `items`   | Update JSDoc to fix type definitions for return of getters               | [#152](https://github.com/openhab/openhab-js/pull/152) | No       |
| Enhancement | `things`  | Update JSDoc to fix type definitions for return of getters               | [#152](https://github.com/openhab/openhab-js/pull/152) | No       |

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/3).

## 2.0.1

| Type        | Namespace | Description                                                              | Reference                                              | Breaking |
|-------------|-----------|--------------------------------------------------------------------------|--------------------------------------------------------|----------|
| Bugfix      | `rules`   | Strip dashes in generated rule UIDs                                      | [#144](https://github.com/openhab/openhab-js/pull/144) | No       |
| Bugfix      | `rules`   | Fix `itemName` & `triggerType` unavailable for Group in Item****Triggers | [#146](https://github.com/openhab/openhab-js/pull/146) | No       |
| Enhancement | `actions` | Enable type definitions & Extend with `NotificationAction`               | [#148](https://github.com/openhab/openhab-js/pull/148) | No       |

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/2).

## 2.0.0

| Type        | Namespace  | Description                                              | Reference                                              | Breaking |
|-------------|------------|----------------------------------------------------------|--------------------------------------------------------|----------|
| Bugfix      | `rules`    | Failed rule run logs a useful error message              | [#116](https://github.com/openhab/openhab-js/pull/116) | No       |
| Enhancement | `utils`    | Allow `dumpObject` to also dump own properties           | [#121](https://github.com/openhab/openhab-js/pull/121) | No       |
| Bugfix      | `rules`    | Fix `removeItem` not working                             | [#122](https://github.com/openhab/openhab-js/pull/122) | No       |
| Enhancement | `triggers` | Add PWM Automation trigger                               | [#126](https://github.com/openhab/openhab-js/pull/126) | No       |
| Enhancement | `triggers` | Add PID Automation trigger                               | [#131](https://github.com/openhab/openhab-js/pull/131) | No       |
| Enhancement | `things`   | Add Thing class & add `getThing`(s)                      | [#132](https://github.com/openhab/openhab-js/pull/132) | No       |
| Enhancement | `rules`    | Refactor EventObject to only hold properties with values | [#136](https://github.com/openhab/openhab-js/pull/136) | **Yes**  |
| Enhancement |            | Add type definitions for better autocompletion           | [#137](https://github.com/openhab/openhab-js/pull/137) | No       |

Also see the [Release Milestone](https://github.com/openhab/openhab-js/milestone/1).

## 1.2.3

Changelog is incomplete!

| Namespace | Description                                                        | Reference                                              | Breaking |
|-----------|--------------------------------------------------------------------|--------------------------------------------------------|----------|
| items     | `addItem(...)` and `updateItem(...)` use `itemConfig` as parameter | [#109](https://github.com/openhab/openhab-js/pull/109) | **Yes**  |
| time      | Add timeUtils                                                      | [#101](https://github.com/openhab/openhab-js/pull/101) | No       |

## 1.2.2

Changelog is incomplete!

| Namespace | Description                                                         | Reference                                            | Breaking |
|-----------|---------------------------------------------------------------------|------------------------------------------------------|----------|
| items     | item.history.lastUpdate() returns `ZonedDateTime` instead of `Date` | [#67](https://github.com/openhab/openhab-js/pull/67) | **Yes**  |
