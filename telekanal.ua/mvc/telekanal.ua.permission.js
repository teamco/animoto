/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineTelekanalUaPermission(BasePermission) {

  /**
   * Define Permissions
   * @class TelekanalUaPermission
   * @constructor
   * @extends BasePermission
   */
  var TelekanalUaPermission = function TelekanalUaPermission() {

  };

  return TelekanalUaPermission.extend('TelekanalUaPermission', {},
      BasePermission.prototype);
});
