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
  StatusBarComponentScreen,
} = require('../../screens/components/statusBarComponent.screen.js');

const hiddenFalseText = 'hidden: false';

describe('Test is checking SwipeableCard component', () => {
  test('Should view the hidden false text element', async () => {
    await StatusBarComponentScreen.scrollUntilStatusBarComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkStatusBarComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickStatusBarComponent();
    expect(
      await StatusBarComponentScreen.checkHiddenButtonIsDisplayed,
    ).toBeTruthy();
    expect(await StatusBarComponentScreen.getHiddenFalseText()).toContain(
      hiddenFalseText,
    );
  });
});
