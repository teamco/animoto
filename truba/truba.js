/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/truba/mvc/truba.controller',
  'plugins/widgets/truba/mvc/truba.model',
  'plugins/widgets/truba/mvc/truba.view',
  'plugins/widgets/truba/mvc/truba.event.manager',
  'plugins/widgets/truba/mvc/truba.permission'
], function defineTruba(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Truba
   * @param containment
   * @param [opts]
   * @constructor
   * @class Truba
   * @extends AntHill
   */
  var Truba = function Truba(containment, opts) {

    /**
     * Define containment
     * @memberOf Truba
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Truba
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
      regex: /\d+/,
      mask: 'http://truba.com/tools/config_video.php?id={id}'
    };

    /**
     * Define MVC
     * @memberOf Truba
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

  return Truba.extend('Truba', {}, AntHill.prototype);
});
