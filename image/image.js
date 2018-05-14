/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/image/mvc/image.controller',
  'plugins/widgets/image/mvc/image.model',
  'plugins/widgets/image/mvc/image.view',
  'plugins/widgets/image/mvc/image.event.manager',
  'plugins/widgets/image/mvc/image.permission'
], function defineImage(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Image
   * @param {Widget} containment
   * @param [opts]
   * @constructor
   * @class Image
   * @extends AntHill
   */
  var Image = function Image(containment, opts) {

    /**
     * Define containment
     * @property Image
     * @type {Widget}
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Image
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
     *          floating: boolean,
     *          padding: {
     *              top: number,
     *              right: number,
     *              bottom: number,
     *              left: number
     *          }
     *      }
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
      }
    };

    /**
     * Define MVC
     * @property Image
     * @type {MVCJs}
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
        this.eventManager.eventList.initWidget,
        opts
    );
  };

  return Image.extend('Image', {}, AntHill.prototype);
});