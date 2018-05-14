/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/lets.play/mvc/lets.play.controller',
  'plugins/widgets/lets.play/mvc/lets.play.model',
  'plugins/widgets/lets.play/mvc/lets.play.view',
  'plugins/widgets/lets.play/mvc/lets.play.event.manager',
  'plugins/widgets/lets.play/mvc/lets.play.permission'
], function defineLetsPlay(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define LetsPlay
   * @param containment
   * @param [opts]
   * @constructor
   * @class LetsPlay
   * @extends AntHill
   */
  var LetsPlay = function LetsPlay(containment, opts) {

    /**
     * Define containment
     * @property LetsPlay
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property LetsPlay
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
     * @property LetsPlay
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

  return LetsPlay.extend('LetsPlay', {}, AntHill.prototype);
});
