/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/vimeo/mvc/vimeo.controller',
  'plugins/widgets/vimeo/mvc/vimeo.model',
  'plugins/widgets/vimeo/mvc/vimeo.view',
  'plugins/widgets/vimeo/mvc/vimeo.event.manager',
  'plugins/widgets/vimeo/mvc/vimeo.permission'
], function defineVimeo(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Vimeo
   * @param containment
   * @param [opts]
   * @constructor
   * @class Vimeo
   * @extends AntHill
   */
  var Vimeo = function Vimeo(containment, opts) {

    /**
     * Define containment
     * @memberOf Vimeo
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Vimeo
     * @type {*}
     */
    this.referrer = undefined;

    /**
     * Define defaults
     * @type {{
         *      plugin: boolean,
         *      html: {
         *          style: string,
         *          header: boolean,
         *          footer: boolean,
         *          padding: {
         *              top: number,
         *              right: number,
         *              bottom: number,
         *              left: number
         *          }
         *      },
         *      regex: RegExp,
         *      mask: string
         * }}
     */
    var DEFAULTS = {
      plugin: true,
      html: {
        style: 'default',
        header: false,
        footer: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      regex: /^.*(vimeo\.com\/)(?:(?:groups\/[^\/]+\/videos\/)|(?:album\/)|(?:video\/)|(?:channels\/))?((moogaloop\.swf\?clip_id=)?(\d+)).*$/i,
      mask: '<iframe width="100%" height="100%" scrolling="no" allowtransparency="true" src="https://player.vimeo.com/video/{{videoId}}" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen>'
    };

    /**
     * Define MVC
     * @memberOf Vimeo
     * @type {MVC}
     */
    this.mvc = new MVC({
      scope: this,
      config: [
        {uuid: this.containment.model.getContentUUID()},
        DEFAULTS
      ],
      components: [
        Controller,
        Model,
        View,
        EventManager,
        Permission
      ],
      render: true
    });

    this.observer.publish(
        this.eventmanager.eventList.initWidget,
        opts
    );
  };

  return Vimeo.extend('Vimeo', {}, AntHill.prototype);
});