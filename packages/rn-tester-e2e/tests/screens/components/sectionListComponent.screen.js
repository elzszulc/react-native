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

type SectionListComponentScreenType = {
  sectionListScreenElement: string,
  sectionListContentInsetScreenElement: string,
  sectionListOnEndReachedScreenElement: string,
  sectionListOnViewableItemsChangedScreenElement: string,
  sectionListWithSeparatorsScreenElement: string,
  sectionListStickyHeadersEnabledScreenElement: string,
  sectionListInvertedScreenElement: string,
  sectionListScrollableScreenElement: string,
  btnTestElement: string,
  pizzaElement: string,
  iceCreamElement: string,
  separatorTextElement: string,
  btnStickyToggleElement: string,
  btnTopElement: string,
  checkSectionListContentInsetIsDisplayed: () => Promise<boolean>,
  checkSectionListOnEndReachedIsDisplayed: () => Promise<boolean>,
  checkSectionListOnViewableItemsChangedIsDisplayed: () => Promise<boolean>,
  checkSectionListWithSeparatorsIsDisplayed: () => Promise<boolean>,
  checkSectionListStickyHeadersEnabledIsDisplayed: () => Promise<boolean>,
  checkSectionListInvertedIsDisplayed: () => Promise<boolean>,
  checkSectionListScrollableIsDisplayed: () => Promise<boolean>,
  checkSectionListTestButtonIsDisplayed: () => Promise<boolean>,
  checkSectionListPizzaElementIsDisplayed: () => Promise<boolean>,
  checkSectionListIceCreamElementIsDisplayed: () => Promise<boolean>,
  checkSectionListSeparatorTextElementIsDisplayed: () => Promise<boolean>,
  checkSectionListStickyToggleButtonIsDisplayed: () => Promise<boolean>,
  checkSectionListTopButtonIsDisplayed: () => Promise<boolean>,
  clickSectionListOnEndReachedButton: () => Promise<void>,
  clickSectionListOnViewableItemsChangedButton: () => Promise<void>,
  clickSectionListWithSeparatorsButton: () => Promise<void>,
  clickSectionListStickyHeadersEnabledButton: () => Promise<void>,
  clickSectionListInvertedButton: () => Promise<void>,
  clickSectionListScrollableButton: () => Promise<void>,
  clickSectionListStickyToggleButton: () => Promise<void>,
  scrollUntilSectionListComponentIsDisplayed: () => Promise<void>,
  scrollUntilSectionListScrollableComponentIsDisplayed: () => Promise<void>,
  scrollUntilIceCreamComponentIsDisplayed: () => Promise<void>,
  scrollUntilSectionListScrollableComponentIsDisplayed: () => Promise<void>,
};

export const SectionListComponentScreen: SectionListComponentScreenType = {
  // reference in the Components list
  sectionListScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList'),
    android: androidWidget('TextView', 'text', 'SectionList'),
  }),
  // References to elements within the SectionList Component screen
  sectionListContentInsetScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList Content Inset'),
    android: androidWidget('TextView', 'text', 'SectionList Content Inset'),
  }),
  sectionListOnEndReachedScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList onEndReached'),
    android: androidWidget('TextView', 'text', 'SectionList onEndReached'),
  }),
  sectionListOnViewableItemsChangedScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList On Viewable Items Changed'),
    android: androidWidget(
      'TextView',
      'text',
      'SectionList On Viewable Items Changed',
    ),
  }),
  sectionListWithSeparatorsScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList With Separators'),
    android: androidWidget('TextView', 'text', 'SectionList With Separators'),
  }),
  sectionListStickyHeadersEnabledScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList Sticky Headers Enabled'),
    android: androidWidget(
      'TextView',
      'text',
      'SectionList Sticky Headers Enabled',
    ),
  }),
  sectionListInvertedScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList Inverted'),
    android: androidWidget('TextView', 'text', 'SectionList Inverted'),
  }),
  sectionListScrollableScreenElement: Utils.platformSelect({
    ios: iOSName('SectionList scrollable'),
    android: androidWidget('TextView', 'text', 'SectionList scrollable'),
  }),
  btnTestElement: Utils.platformSelect({
    ios: iOSName('start_test'),
    android: androidWidget('Button', 'resource-id', 'start_test'),
  }),
  pizzaElement: Utils.platformSelect({
    ios: iOSName('Pizza'),
    android: androidWidget('TextView', 'text', 'Pizza'),
  }),
  iceCreamElement: Utils.platformSelect({
    ios: iOSName('Ice Cream'),
    android: androidWidget('TextView', 'text', 'Ice Cream'),
  }),
  separatorTextElement: Utils.platformSelect({
    ios: iOSName('section_list_separator_text'),
    android: androidWidget(
      'TextView',
      'resource-id',
      'section_list_separator_text',
    ),
  }),
  btnStickyToggleElement: Utils.platformSelect({
    ios: iOSName('start_test'),
    android: androidWidget('Button', 'resource-id', 'start_test'),
  }),
  btnTopElement: Utils.platformSelect({
    ios: iOSName('Top'),
    android: androidWidget('TextView', 'text', 'TOP'),
  }),
  // Methods to interact with the elements
  checkSectionListContentInsetIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListContentInsetScreenElement,
    );
  },
  checkSectionListOnEndReachedIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListOnEndReachedScreenElement,
    );
  },
  checkSectionListOnViewableItemsChangedIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListOnViewableItemsChangedScreenElement,
    );
  },
  checkSectionListWithSeparatorsIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListWithSeparatorsScreenElement,
    );
  },
  checkSectionListStickyHeadersEnabledIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListStickyHeadersEnabledScreenElement,
    );
  },
  checkSectionListInvertedIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListInvertedScreenElement,
    );
  },
  checkSectionListScrollableIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListScrollableScreenElement,
    );
  },
  checkSectionListTestButtonIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.btnTestElement);
  },
  checkSectionListPizzaElementIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.pizzaElement);
  },
  checkSectionListSeparatorTextElementIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.separatorTextElement);
  },
  checkSectionListStickyToggleButtonIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.btnStickyToggleElement);
  },
  checkSectionListIceCreamElementIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.iceCreamElement);
  },
  checkSectionListTopButtonIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.btnTopElement);
  },
  clickSectionListOnEndReachedButton: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.sectionListOnEndReachedScreenElement);
  },
  clickSectionListOnViewableItemsChangedButton: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    await Utils.clickElement(
      this.sectionListOnViewableItemsChangedScreenElement,
    );
  },
  clickSectionListWithSeparatorsButton: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.sectionListWithSeparatorsScreenElement);
  },
  clickSectionListStickyHeadersEnabledButton: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.sectionListStickyHeadersEnabledScreenElement);
  },
  clickSectionListInvertedButton: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.sectionListInvertedScreenElement);
  },
  clickSectionListScrollableButton: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.sectionListScrollableScreenElement);
  },
  clickSectionListStickyToggleButton: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.btnStickyToggleElement);
  },
  scrollUntilSectionListComponentIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    return await Utils.scrollToElement(this.sectionListScreenElement);
  },
  scrollUntilSectionListScrollableComponentIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    return await Utils.scrollToElement(this.sectionListScrollableScreenElement);
  },
  scrollUntilIceCreamComponentIsDisplayed: async function (
    this: SectionListComponentScreenType,
  ): Promise<void> {
    return await Utils.scrollToElement(this.iceCreamElement);
  },
};
