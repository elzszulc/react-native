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
  ImageComponentScreen,
} = require('../../screens/components/imageComponent.screen.js');
const {
    JSResponderHandlerComponentScreen,
  } = require('../../screens/components/jsResponderHandlerComponent.screen.js');

describe('Test is checking plain image component', () => {
  test('Should view properly image element', async () => {
    await JSResponderHandlerComponentScreen.scrollUntilJSResponderHandlerComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkImageComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickImageComponent();
    expect(
      await ImageComponentScreen.checkPlainNetworkImageIsDisplayed(),
    ).toBeTruthy();
  });
});
