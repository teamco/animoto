/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineTwentyFourVideoPermission(BasePermission) {

  /**
   * Define Permissions
   * @class TwentyFourVideoPermission
   * @constructor
   * @extends BasePermission
   */
  var TwentyFourVideoPermission = function TwentyFourVideoPermission() {

  };

  return TwentyFourVideoPermission.extend('TwentyFourVideoPermission', {},
      BasePermission.prototype);
});
