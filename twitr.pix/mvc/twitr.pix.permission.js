/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineTwitrPixPermission(BasePermission) {

  /**
   * Define Permissions
   * @class TwitrPixPermission
   * @constructor
   * @extends BasePermission
   */
  var TwitrPixPermission = function TwitrPixPermission() {

  };

  return TwitrPixPermission.extend('TwitrPixPermission', {},
      BasePermission.prototype);
});
