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
  SectionListComponentScreen,
} = require('../../screens/components/sectionListComponent.screen.js');

describe('Test is checking SectionList OnEndReached component', () => {
  test('Should view test button element', async () => {
    await SectionListComponentScreen.scrollUntilSectionListComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkSectionListComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickSectionListComponent();
    expect(
      await SectionListComponentScreen.checkSectionListOnEndReachedIsDisplayed(),
    ).toBeTruthy();
    await SectionListComponentScreen.clickSectionListOnEndReachedButton();
    expect(
      await SectionListComponentScreen.checkSectionListTestButtonIsDisplayed(),
    ).toBeTruthy();
  });
});

describe('Test is checking SectionList On Viewable Items Changed component', () => {
  test('Should view pizza element', async () => {
    await SectionListComponentScreen.scrollUntilSectionListComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkSectionListComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickSectionListComponent();
    expect(
      await SectionListComponentScreen.checkSectionListOnViewableItemsChangedIsDisplayed(),
    ).toBeTruthy();
    await SectionListComponentScreen.clickSectionListOnViewableItemsChangedButton();
    expect(
      await SectionListComponentScreen.checkSectionListPizzaElementIsDisplayed(),
    ).toBeTruthy();
  });
});

describe('Test is checking SectionList With Separators component', () => {
  test('Should view separator text element', async () => {
    await SectionListComponentScreen.scrollUntilSectionListComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkSectionListComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickSectionListComponent();
    expect(
      await SectionListComponentScreen.checkSectionListWithSeparatorsIsDisplayed(),
    ).toBeTruthy();
    await SectionListComponentScreen.clickSectionListWithSeparatorsButton();
    expect(
      await SectionListComponentScreen.checkSectionListSeparatorTextElementIsDisplayed(),
    ).toBeTruthy();
  });
});

describe('Test is checking SectionList Sticky Headers Enabled component', () => {
  test('Should view Sticky On button element', async () => {
    await SectionListComponentScreen.scrollUntilSectionListComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkSectionListComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickSectionListComponent();
    expect(
      await SectionListComponentScreen.checkSectionListStickyHeadersEnabledIsDisplayed(),
    ).toBeTruthy();
    await SectionListComponentScreen.clickSectionListStickyHeadersEnabledButton();
    expect(
      await SectionListComponentScreen.checkSectionListStickyToggleButtonIsDisplayed(),
    ).toBeTruthy();
  });
});

describe('Test is checking SectionList Inverted component', () => {
  test('Should view the last element', async () => {
    await SectionListComponentScreen.scrollUntilSectionListComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkSectionListComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickSectionListComponent();
    expect(
      await SectionListComponentScreen.checkSectionListInvertedIsDisplayed(),
    ).toBeTruthy();
    await SectionListComponentScreen.clickSectionListInvertedButton();
    expect(
      await SectionListComponentScreen.checkSectionListPizzaElementIsDisplayed(),
    ).toBeTruthy();
    await SectionListComponentScreen.scrollUntilIceCreamComponentIsDisplayed();
    await SectionListComponentScreen.clickSectionListStickyToggleButton();
    expect(
      await SectionListComponentScreen.checkSectionListIceCreamElementIsDisplayed(),
    ).toBeTruthy();
  });
});

describe('Test is checking SectionList scrollable component', () => {
  test('Should view the last element', async () => {
    await SectionListComponentScreen.scrollUntilSectionListComponentIsDisplayed();
    expect(
      await ComponentsScreen.checkSectionListComponentIsDisplayed(),
    ).toBeTruthy();
    await ComponentsScreen.clickSectionListComponent();
    await SectionListComponentScreen.scrollUntilSectionListScrollableComponentIsDisplayed();
    expect(
      await SectionListComponentScreen.checkSectionListScrollableIsDisplayed(),
    ).toBeTruthy();
    await SectionListComponentScreen.clickSectionListScrollableButton();
    expect(
      await SectionListComponentScreen.checkSectionListTopButtonIsDisplayed(),
    ).toBeTruthy();
  });
});
