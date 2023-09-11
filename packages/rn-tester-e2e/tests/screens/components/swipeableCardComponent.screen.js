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
  iOSLabel,
  iOSName,
} from '../../helpers/utils';

type SwipeableComponentScreenType = {
  swipeableCardScreenElement: string,
  firstSectionElement: string,
  checkSwipeableCardIsDisplayed: () => Promise<boolean>,
  checkFirstSectionIsDisplayed: () => Promise<boolean>,
  scrollUntilSwipeableCardComponentIsDisplayed: () => Promise<void>,
};

export const SwipeableCardComponentScreen: SwipeableComponentScreenType = {
  // reference in the Components SwipeableComponentScreenType
  swipeableCardScreenElement: Utils.platformSelect({
    ios: iOSName('SwipeableCard'),
    android: androidWidget('TextView', 'text', 'SwipeableCard'),
  }),
  // References to elements within the SwipeableCard Component screen
  firstSectionElement: Utils.platformSelect({
    ios: iOSLabel('Section #0')[1],
    android: androidWidget('TextView', 'text', 'Section #0'),
  }),
  // Methods to interact with the elements
  checkSwipeableCardIsDisplayed: async function (
    this: SwipeableComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.swipeableCardScreenElement);
  },
  checkFirstSectionIsDisplayed: async function (
    this: SwipeableComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.firstSectionElement);
  },
  scrollUntilSwipeableCardComponentIsDisplayed: async function (
    this: SwipeableComponentScreenType,
  ): Promise<void> {
    return await Utils.scrollToElement(this.swipeableCardScreenElement);
  },
};
