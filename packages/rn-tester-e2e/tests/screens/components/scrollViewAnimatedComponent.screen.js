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

type ScrollViewAnimatedComponentScreenType = {
  scrollViewAnimatedScreenElement: string,
  btnScrollMeHorizontallyElement: string,
  checkScrollMeHorizontallyButtonIsDisplayed: () => Promise<boolean>,
  scrollUntilScrollViewAnimatedComponentIsDisplayed: () => Promise<void>,
};

export const ScrollViewAnimatedComponentScreen: ScrollViewAnimatedComponentScreenType =
  {
    // reference in the Components list
    scrollViewAnimatedScreenElement: Utils.platformSelect({
      ios: iOSName('ScrollViewAnimated'),
      android: androidWidget('TextView', 'text', 'ScrollViewAnimated'),
    }),
    // References to elements within the ScrollViewAnimated Component screen
    btnScrollMeHorizontallyElement: Utils.platformSelect({
      ios: iOSLabel('Scroll me horizontally'),
      android: androidWidget('TextView', 'text', 'Scroll me horizontally'),
    }),
    // Methods to interact with the elements
    checkScrollMeHorizontallyButtonIsDisplayed: async function (
      this: ScrollViewAnimatedComponentScreenType,
    ): Promise<boolean> {
      return await Utils.checkElementExistence(
        this.btnScrollMeHorizontallyElement,
      );
    },
    scrollUntilScrollViewAnimatedComponentIsDisplayed: async function (
      this: ScrollViewAnimatedComponentScreenType,
    ): Promise<void> {
      return await Utils.scrollToElement(this.scrollViewAnimatedScreenElement);
    },
  };
