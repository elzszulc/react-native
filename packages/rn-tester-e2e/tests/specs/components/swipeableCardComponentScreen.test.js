/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

const {ComponentsScreen} = require('../../screens/components.screen.js');
const {
  SwipeableCardComponentScreen,
} = require('../../screens/components/swipeableCardComponent.screen.js');

describe('Test is checking SwipeableCard component', () => {
  test('Should view the first section element', async () => {
    await SwipeableCardComponentScreen.scrollUntilSwipeableCardComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkSwipeableCardComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickSwipeableCardComponent();
    expect(
      await SwipeableCardComponentScreen.checkFirstSectionIsDisplayed(),
    ).toBeTruthy();
  });
});
