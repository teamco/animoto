/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */
// https://paypal.github.io/JavaScriptButtons/#addbutton
defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/paypal.btn/mvc/paypal.btn.controller',
  'plugins/widgets/paypal.btn/mvc/paypal.btn.model',
  'plugins/widgets/paypal.btn/mvc/paypal.btn.view',
  'plugins/widgets/paypal.btn/mvc/paypal.btn.event.manager',
  'plugins/widgets/paypal.btn/mvc/paypal.btn.permission'
], function definePaypalBtn(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define PaypalBtn
   * @param containment
   * @param [opts]
   * @constructor
   * @class PaypalBtn
   * @extends AntHill
   */
  var PaypalBtn = function PaypalBtn(containment, opts) {

    /**
     * Define containment
     * @property PaypalBtn
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property PaypalBtn
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
     * @property PaypalBtn
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

  return PaypalBtn.extend('PaypalBtn', {}, AntHill.prototype);
});
