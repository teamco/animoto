/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineYoutubePermission(BasePermission) {

  /**
   * Define Permissions
   * @class YoutubePermission
   * @constructor
   * @extends BasePermission
   */
  var YoutubePermission = function YoutubePermission() {

  };

  return YoutubePermission.extend('YoutubePermission', {},
      BasePermission.prototype);
});