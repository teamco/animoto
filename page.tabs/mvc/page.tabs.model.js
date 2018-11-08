/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/4/12
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant EmptyModel
 * @type {EmptyModel}
 */
const EmptyModel = require('../../empty/mvc/empty.model.js');

/**
 * @class PageTabsModel
 * @type {PageTabsModel}
 */
export class PageTabsModel extends EmptyModel {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'PageTabsModel', scope, false);

    /**
     * Define preferences
     * @property PageTabsModel
     * @type {{pagetabsSwipe: {type: string, disabled: boolean, value: boolean, visible: boolean}}}
     */
    this.preferences = {
      pagetabsSwipe: {
        type: 'checkbox',
        disabled: false,
        value: true,
        visible: true
      }
    };

    /**
     * Define rules
     * @property PageTabsModel
     */
    this.rules = {};
  }

  /**
   * Set PageTabs swipe
   * @memberOf PageTabsModel
   * @param {boolean} swipe
   */
  setPagetabsSwipe(swipe) {
    this.setPrefs('pagetabsSwipe', swipe);
  }
};