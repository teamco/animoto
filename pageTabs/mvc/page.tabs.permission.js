/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

import {EmptyPermission} from '../../empty/mvc/empty.permission';

/**
 * @class PageTabsPermission
 * @extends EmptyPermission
 * @type {PageTabsPermission}
 */
export class PageTabsPermission extends EmptyPermission {

  /**
   * @constructor
   * @param {string} [name]
   * @param {PageTabs} scope
   */
  constructor(name, scope) {
    super(name || 'PageTabsPermission', scope);
  }
}