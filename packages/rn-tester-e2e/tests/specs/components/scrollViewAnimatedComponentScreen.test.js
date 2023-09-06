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
  ScrollViewAnimatedComponentScreen,
} = require('../../screens/components/scrollViewAnimatedComponent.screen.js');

describe('Test is checking ScrollView component', () => {
  test('Should view scroll view item element', async () => {
    await ScrollViewAnimatedComponentScreen.scrollUntilScrollViewAnimatedComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkScrollViewAnimatedComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickScrollViewAnimatedComponent();
    expect(
      await ScrollViewAnimatedComponentScreen.checkScrollMeHorizontallyButtonIsDisplayed(),
    ).toBeTruthy();
  });
});
