/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

define([
  'modules/Permission'
], function defineSmotriComPermission(BasePermission) {

  /**
   * Define Permissions
   * @class SmotriComPermission
   * @constructor
   * @extends BasePermission
   */
  var SmotriComPermission = function SmotriComPermission() {

  };

  return SmotriComPermission.extend('SmotriComPermission', {},
      BasePermission.prototype);
});
