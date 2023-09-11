/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import {
  UtilsSingleton as Utils,
  androidWidget,
  iOSName,
} from '../../helpers/utils';

type StatusBarComponentScreenType = {
  statusBarScreenElement: string,
  btnHiddenElement: string,
  checkScrollViewItemsIsDisplayed: () => Promise<boolean>,
  checkHiddenButtonIsDisplayed: () => Promise<boolean>,
  scrollUntilStatusBarComponentIsDisplayed: () => Promise<void>,
  getHiddenFalseText: () => Promise<string>,
};

export const StatusBarComponentScreen: StatusBarComponentScreenType = {
  // reference in the Components list
  statusBarScreenElement: Utils.platformSelect({
    ios: iOSName('StatusBar'),
    android: androidWidget('TextView', 'text', 'StatusBar'),
  }),
  // References to elements within the StatusBar Component screen
  btnHiddenElement: Utils.platformSelect({
    ios: iOSName('hidden: false'),
    android: androidWidget(
      'TextView',
      'resource-id',
      'status_bar_hidden_button',
    ),
  }),
  // Methods to interact with the elements
  checkScrollViewItemsIsDisplayed: async function (
    this: StatusBarComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.statusBarScreenElement);
  },
  checkHiddenButtonIsDisplayed: async function (
    this: StatusBarComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.btnHiddenElement);
  },
  scrollUntilStatusBarComponentIsDisplayed: async function (
    this: StatusBarComponentScreenType,
  ): Promise<void> {
    return await Utils.scrollToElement(this.statusBarScreenElement);
  },
  getHiddenFalseText: async function (
    this: StatusBarComponentScreenType,
  ): Promise<string> {
    return await Utils.getElementText(this.btnHiddenElement);
  },
};
