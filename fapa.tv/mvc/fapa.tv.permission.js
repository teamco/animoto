/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineFapaTvPermission(BasePermission) {

  /**
   * Define Permissions
   * @class FapaTvPermission
   * @constructor
   * @extends BasePermission
   */
  var FapaTvPermission = function FapaTvPermission() {

  };

  return FapaTvPermission.extend('FapaTvPermission', {},
      BasePermission.prototype);
});
