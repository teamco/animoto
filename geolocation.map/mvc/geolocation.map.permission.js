/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineGeolocationMapPermission(BasePermission) {

  /**
   * Define Permissions
   * @class GeolocationMapPermission
   * @constructor
   * @extends BasePermission
   */
  var GeolocationMapPermission = function GeolocationMapPermission() {
  };

  return GeolocationMapPermission.extend('GeolocationMapPermission', {},
      BasePermission.prototype);
});