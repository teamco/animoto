/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/sportbox.ru/mvc/sportbox.ru.controller',
  'plugins/widgets/sportbox.ru/mvc/sportbox.ru.model',
  'plugins/widgets/sportbox.ru/mvc/sportbox.ru.view',
  'plugins/widgets/sportbox.ru/mvc/sportbox.ru.event.manager',
  'plugins/widgets/sportbox.ru/mvc/sportbox.ru.permission'
], function defineSportboxRu(AntHill, MVC, Controller, Model, View,
    EventManager, Permission) {

  /**
   * Define SportboxRu
   * @param containment
   * @param [opts]
   * @constructor
   * @class SportboxRu
   * @extends AntHill
   */
  var SportboxRu = function SportboxRu(containment, opts) {

    /**
     * Define containment
     * @property SportboxRu
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property SportboxRu
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
     * @property SportboxRu
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

  return SportboxRu.extend('SportboxRu', {}, AntHill.prototype);
});
