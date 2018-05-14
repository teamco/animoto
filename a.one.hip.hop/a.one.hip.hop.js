/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/a.one.hip.hop/mvc/a.one.hip.hop.controller',
  'plugins/widgets/a.one.hip.hop/mvc/a.one.hip.hop.model',
  'plugins/widgets/a.one.hip.hop/mvc/a.one.hip.hop.view',
  'plugins/widgets/a.one.hip.hop/mvc/a.one.hip.hop.event.manager',
  'plugins/widgets/a.one.hip.hop/mvc/a.one.hip.hop.permission'
], function defineAOneHipHop(AntHill, MVC, Controller, Model, View,
    EventManager, Permission) {

  /**
   * Define AOneHipHop
   * @param containment
   * @param [opts]
   * @constructor
   * @class AOneHipHop
   * @extends AntHill
   */
  var AOneHipHop = function AOneHipHop(containment, opts) {

    /**
     * Define containment
     * @property AOneHipHop
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property AOneHipHop
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
      }
    };

    /**
     * Define MVC
     * @property AOneHipHop
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

  return AOneHipHop.extend('AOneHipHop', {}, AntHill.prototype);
});
