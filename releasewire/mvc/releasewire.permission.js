/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineReleasewirePermission(BasePermission) {

  /**
   * Define Permissions
   * @class ReleasewirePermission
   * @constructor
   * @extends BasePermission
   */
  var ReleasewirePermission = function ReleasewirePermission() {
  };

  return ReleasewirePermission.extend(
      'ReleasewirePermission', {},
      BasePermission.prototype
  );
});
