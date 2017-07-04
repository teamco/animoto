/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

define([
  'modules/Permission'
], function defineOraTvPermission(BasePermission) {

  /**
   * Define Permissions
   * @class OraTvPermission
   * @constructor
   * @extends BasePermission
   */
  var OraTvPermission = function OraTvPermission() {
  };

  return OraTvPermission.extend(
      'OraTvPermission', {},
      BasePermission.prototype
  );
});
