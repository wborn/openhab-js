// const { ZonedDateTime } = require('@js-joda/core');
const time = require('../time');
const PersistenceExtensions = Java.type('org.openhab.core.persistence.extensions.PersistenceExtensions');
const DateTime = Java.type('java.time.ZonedDateTime');

/**
 * Class representing the historic state of an openHAB Item.
 * If the Item receives it's state from a binding that supports units of measurement, the returned state is in the according base unit, otherwise there is no unit conversion happening.
 * Wrapping the {@link https://www.openhab.org/javadoc/latest/org/openhab/core/persistence/extensions/persistenceextensions PersistenceExtensions}.
 *
 * @memberOf items
 * @hideconstructor
 */
class ItemHistory {
  constructor (rawItem) {
    this.rawItem = rawItem;
  }

  /**
   * Gets the average value of the state of a given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  averageBetween (begin, end, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.averageBetween(this.rawItem, ...arguments));
  }

  /**
   * Gets the average value of the state of a given Item since a certain point in time.
   *
   * @example
   * var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
   * var item = items.getItem('KitchenDimmer');
   * console.log('KitchenDimmer average since yesterday', item.history.averageSince(yesterday));
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  averageSince (timestamp, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.averageSince(this.rawItem, ...arguments));
  }

  /**
   * Checks if the state of a given Item has changed between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {boolean}
   */
  changedBetween (begin, end, serviceId) {
    return PersistenceExtensions.changedBetween(this.rawItem, ...arguments);
  }

  /**
   * Checks if the state of a given Item has changed since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {boolean}
   */
  changedSince (timestamp, serviceId) {
    return PersistenceExtensions.changedSince(this.rawItem, ...arguments);
  }

  /**
   * Gets the difference value of the state of a given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  deltaBetween (begin, end, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.deltaBetween(this.rawItem, ...arguments));
  }

  /**
   * Gets the difference value of the state of a given Item since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  deltaSince (timestamp, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.deltaSince(this.rawItem, ...arguments));
  }

  /**
   * Gets the standard deviation of the state of the given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  deviationBetween (begin, end, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.deviationBetween(this.rawItem, ...arguments));
  }

  /**
   * Gets the standard deviation of the state of the given Item since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  deviationSince (timestamp, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.deviationSince(this.rawItem, ...arguments));
  }

  /**
   * Gets the evolution rate of the state of a given Item since a certain point in time.
   *
   * @deprecated Replaced by evolutionRateSince and evolutionRateBetween.
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  evolutionRate (timestamp, serviceId) {
    console.warn('"evolutionRate" is deprecated and will be removed in the future. Use "evolutionRateSince" instead.');
    return this._decimalOrNull(PersistenceExtensions.evolutionRate(this.rawItem, ...arguments));
  }

  /**
   * Gets the evolution rate of the state of a given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  evolutionRateBetween (begin, end, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.evolutionRate(this.rawItem, ...arguments));
  }

  /**
   * Gets the evolution rate of the state of a given Item since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  evolutionRateSince (timestamp, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.evolutionRate(this.rawItem, ...arguments));
  }

  /**
   * Retrieves the historic state for a given Item at a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(string | null)} state
   */
  historicState (timestamp, serviceId) {
    return this._stateOrNull(PersistenceExtensions.historicState(this.rawItem, ...arguments));
  }

  /**
   * Query the last update time of a given Item.
   *
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(ZonedDateTime | null)}
   */
  lastUpdate (serviceId) {
    return this._dateOrNull(PersistenceExtensions.lastUpdate(this.rawItem, ...arguments));
  }

  /**
   * Retrieves the historic item state for a given Item at the current point in time.
   *
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(string | null)} state
   */
  latestState (serviceId) {
    return this.historicState(DateTime.now(), ...arguments);
  }

  /**
   * Gets the state with the maximum value of a given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)} state or null
   */
  maximumBetween (begin, end, serviceId) {
    const state = this._stateOrNull(PersistenceExtensions.maximumBetween(this.rawItem, ...arguments));
    if (state === null) return null;
    return parseFloat(state);
  }

  /**
   * Gets the state with the maximum value of a given Item since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)} state or null
   */
  maximumSince (timestamp, serviceId) {
    const state = this._stateOrNull(PersistenceExtensions.maximumSince(this.rawItem, ...arguments));
    if (state === null) return null;
    return parseFloat(state);
  }

  /**
   * Gets the state with the minimum value of a given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)} state or null
   */
  minimumBetween (begin, end, serviceId) {
    const state = this._stateOrNull(PersistenceExtensions.minimumBetween(this.rawItem, ...arguments));
    if (state === null) return null;
    return parseFloat(state);
  }

  /**
   * Gets the state with the minimum value of a given Item since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)} state or null
   */
  minimumSince (timestamp, serviceId) {
    const state = this._stateOrNull(PersistenceExtensions.minimumSince(this.rawItem, ...arguments));
    if (state === null) return null;
    return parseFloat(state);
  }

  /**
   * Persists the state of a given Item.
   *
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   */
  persist (serviceId) {
    PersistenceExtensions.persist(this.rawItem, ...arguments);
  }

  /**
   * Returns the previous state of a given Item.
   *
   * @param {boolean} [skipEqual] optional, if true, skips equal state values and searches the first state not equal the current state
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(string | null)} state or null
   */
  previousState (skipEqual, serviceId) {
    return this._stateOrNull(PersistenceExtensions.previousState(this.rawItem, ...arguments));
  }

  /**
   * Gets the sum of the states of a given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  sumBetween (begin, end, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.sumBetween(this.rawItem, ...arguments));
  }

  /**
   * Gets the sum of the states of a given Item since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  sumSince (timestamp, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.sumSince(this.rawItem, ...arguments));
  }

  /**
   * Checks if the state of a given Item has been updated between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {boolean}
   */
  updatedBetween (begin, end, serviceId) {
    return PersistenceExtensions.updatedBetween(this.rawItem, ...arguments);
  }

  /**
   * Checks if the state of a given Item has been updated since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {boolean}
   */
  updatedSince (timestamp, serviceId) {
    return PersistenceExtensions.updatedSince(this.rawItem, ...arguments);
  }

  /**
   * Gets the variance of the state of the given Item between two certain points in time.
   *
   * @param {(ZonedDateTime | Date)} begin begin
   * @param {(ZonedDateTime | Date)} end end
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  varianceBetween (begin, end, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.varianceBetween(this.rawItem, ...arguments));
  }

  /**
   * Gets the variance of the state of the given Item since a certain point in time.
   *
   * @param {(ZonedDateTime | Date)} timestamp
   * @param {string} [serviceId] Optional persistance service ID, if omitted, the default persistance service will be used.
   * @returns {(number | null)}
   */
  varianceSince (timestamp, serviceId) {
    return this._decimalOrNull(PersistenceExtensions.varianceSince(this.rawItem, ...arguments));
  }

  /**
   * @private
   */
  _stateOrNull (result) {
    return result === null ? null : result.state.toString();
  }

  /**
   * @private
   */
  _dateOrNull (result) {
    return result === null ? null : time.ZonedDateTime.parse(result.toString());
  }

  /**
   * @private
   */
  _decimalOrNull (result) {
    return result === null ? null : result.toBigDecimal();
  }
}

module.exports = ItemHistory;
