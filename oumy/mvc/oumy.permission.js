/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineOumyPermission(BasePermission) {

  /**
   * Define Permissions
   * @class OumyPermission
   * @constructor
   * @extends BasePermission
   */
  var OumyPermission = function OumyPermission() {
  };

  return OumyPermission.extend(
      'OumyPermission', {},
      BasePermission.prototype
  );
});
