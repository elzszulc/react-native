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

type ScrollViewComponentScreenType = {
  scrollViewScreenElement: string,
  itemsListScreenElement: string,
  btnScrollToTopElement: string,
  checkItemsListIsDisplayed: () => Promise<boolean>,
  checkScrollToTopButtonIsDisplayed: () => Promise<boolean>,
};

export const ScrollViewComponentScreen: ScrollViewComponentScreenType = {
  // reference in the Components list
  scrollViewScreenElement: Utils.platformSelect({
    ios: iOSName('ScrollView'),
    android: androidWidget('TextView', 'text', 'ScrollView'),
  }),
  // References to elements within the ScrollView Component screen
  itemsListScreenElement: Utils.platformSelect({
    ios: iOSName('scroll_vertical'),
    android: androidWidget('GridView', 'resource-id', 'scroll_vertical'),
  }),
  btnScrollToTopElement: Utils.platformSelect({
    ios: iOSName('scroll_to_top_button'),
    android: androidWidget('TextView', 'text', 'Scroll to top'),
  }),
  // Methods to interact with the elements
  checkItemsListIsDisplayed: async function (
    this: ScrollViewComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.itemsListScreenElement);
  },
  checkScrollToTopButtonIsDisplayed: async function (
    this: ScrollViewComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.btnScrollToTopElement);
  },
};
