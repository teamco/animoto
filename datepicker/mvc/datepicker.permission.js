/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

define([
  'modules/Permission'
], function defineDatepickerPermission(BasePermission) {

  /**
   * Define Permissions
   * @class DatepickerPermission
   * @constructor
   * @extends BasePermission
   */
  var DatepickerPermission = function DatepickerPermission() {

  };

  return DatepickerPermission.extend('DatepickerPermission', {},
      BasePermission.prototype);
});
