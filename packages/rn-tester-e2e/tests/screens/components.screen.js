/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import {UtilsSingleton as Utils, iOSLabel} from '../helpers/utils';

// root level screen in RNTester: Components

const buttonComponentLabel = 'Button Simple React Native button component.';
const activityIndicatorComponentLabel =
  'ActivityIndicator Animated loading indicators.';
const keyboardAvoidingViewComponentLabel =
  'KeyboardAvoidingView Base component for views that automatically adjust their height or position to move out of the way of the keyboard.';
const flatListComponentLabel = 'FlatList Performant, scrollable list of data.';
const jsResponderHandlerComponentLabel =
  'JSResponderHandler Simple example to test JSResponderHandler.';
const modalComponentLabel = 'Modal Component for presenting modal views.';
const newAppScreenComponentLabel =
  'New App Screen Displays the content of the new app screen';
const pressableComponentLabel =
  'Pressable Component for making views pressable.';
const refreshControlComponentLabel =
  'RefreshControl Adds pull-to-refresh support to a scrollview.';
const scrollViewComponentLabel =
  'ScrollView Component that enables scrolling through child components';
const scrollViewSimpleExampleComponentLabel =
  'ScrollViewSimpleExample Component that enables scrolling through child components.';
const scrollViewAnimatedComponentLabel =
  'ScrollViewAnimated Component that is animated when ScrollView is offset.';
const sectionListComponentLabel =
  'SectionList Performant, scrollable list of data.';
const statusBarComponentLabel =
  'StatusBar Component for controlling the status bar';
const swipeableCardComponentLabel =
  'SwipeableCard Example of a swipeable card with scrollable content to test PanResponder and JSResponderHandler interaction.';

type ComponentsScreenType = {
  buttonComponentLabelElement: string,
  activityIndicatorComponentLabelElement: string,
  keyboardAvoidingViewComponentLabelElement: string,
  flatListComponentLabelElement: string,
  jsResponderHandlerComponentLabelElement: string,
  modalComponentLabelElement: string,
  newAppScreenComponentLabelElement: string,
  pressableComponentLabelElement: string,
  refreshControlComponentLabelElement: string,
  scrollViewComponentLabelElement: string,
  scrollViewAnimatedComponentLabelElement: string,
  scrollViewSimpleExampleComponentLabelElement: string,
  sectionListComponentLabelElement: string,
  statusBarComponentLabelElement: string,
  swipeableCardComponentLabelElement: string,
  checkButtonComponentIsDisplayed: () => Promise<boolean>,
  checkActivityIndicatorComponentIsDisplayed: () => Promise<boolean>,
  checkKeyboardAvoidingViewComponentIsDisplayed: () => Promise<boolean>,
  checkFlatListComponentIsDisplayed: () => Promise<boolean>,
  checkJSResponderHandlerComponentIsDisplayed: () => Promise<boolean>,
  checkModalComponentIsDisplayed: () => Promise<boolean>,
  checkNewAppScreenComponentIsDisplayed: () => Promise<boolean>,
  checkPressableComponentIsDisplayed: () => Promise<boolean>,
  checkRefreshControlComponentIsDisplayed: () => Promise<boolean>,
  checkScrollViewComponentIsDisplayed: () => Promise<boolean>,
  checkScrollViewAnimatedComponentIsDisplayed: () => Promise<boolean>,
  checkScrollViewSimpleExampleComponentIsDisplayed: () => Promise<boolean>,
  checkSectionListComponentIsDisplayed: () => Promise<boolean>,
  checkStatusBarComponentIsDisplayed: () => Promise<boolean>,
  checkSwipeableCardComponentIsDisplayed: () => Promise<boolean>,
  clickButtonComponent: () => Promise<void>,
  clickActivityIndicatorComponent: () => Promise<void>,
  clickKeyboardAvoidingViewComponent: () => Promise<void>,
  clickFlatListComponent: () => Promise<void>,
  clickJSResponderHandlerComponent: () => Promise<void>,
  clickModalComponent: () => Promise<void>,
  clickNewAppScreenComponent: () => Promise<void>,
  clickPressableComponent: () => Promise<void>,
  clickRefreshControlComponent: () => Promise<void>,
  clickScrollViewComponent: () => Promise<void>,
  clickScrollViewAnimatedComponent: () => Promise<void>,
  clickScrollViewSimpleExampleComponent: () => Promise<void>,
  clickSectionListComponent: () => Promise<void>,
  clickStatusBarComponent: () => Promise<void>,
  clickSwipeableCardComponent: () => Promise<void>,
};

export const ComponentsScreen: ComponentsScreenType = {
  // Reference in the top level Component list
  buttonComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(buttonComponentLabel),
    android: `~${buttonComponentLabel}`,
  }),
  activityIndicatorComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(activityIndicatorComponentLabel),
    android: `~${activityIndicatorComponentLabel}`,
  }),
  keyboardAvoidingViewComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(keyboardAvoidingViewComponentLabel),
    android: `~${keyboardAvoidingViewComponentLabel}`,
  }),
  flatListComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(flatListComponentLabel),
    android: `~${flatListComponentLabel}`,
  }),
  jsResponderHandlerComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(jsResponderHandlerComponentLabel),
    android: `~${jsResponderHandlerComponentLabel}`,
  }),
  modalComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(modalComponentLabel),
    android: `~${modalComponentLabel}`,
  }),
  newAppScreenComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(newAppScreenComponentLabel),
    android: `~${newAppScreenComponentLabel}`,
  }),
  pressableComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(pressableComponentLabel),
    android: `~${pressableComponentLabel}`,
  }),
  refreshControlComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(refreshControlComponentLabel),
    android: `~${refreshControlComponentLabel}`,
  }),
  scrollViewComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(scrollViewComponentLabel),
    android: `~${scrollViewComponentLabel}`,
  }),
  scrollViewAnimatedComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(scrollViewAnimatedComponentLabel),
    android: `~${scrollViewAnimatedComponentLabel}`,
  }),
  scrollViewSimpleExampleComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(scrollViewSimpleExampleComponentLabel),
    android: `~${scrollViewSimpleExampleComponentLabel}`,
  }),
  sectionListComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(sectionListComponentLabel),
    android: `~${sectionListComponentLabel}`,
  }),
  statusBarComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(statusBarComponentLabel),
    android: `~${statusBarComponentLabel}`,
  }),
  swipeableCardComponentLabelElement: Utils.platformSelect({
    ios: iOSLabel(swipeableCardComponentLabel),
    android: `~${swipeableCardComponentLabel}`,
  }),
  // Methods to interact with top level elements in the list
  checkButtonComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.buttonComponentLabelElement);
  },
  checkActivityIndicatorComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.activityIndicatorComponentLabelElement,
    );
  },
  checkKeyboardAvoidingViewComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.keyboardAvoidingViewComponentLabelElement,
    );
  },
  checkFlatListComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.flatListComponentLabelElement,
    );
  },
  checkJSResponderHandlerComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.jsResponderHandlerComponentLabelElement,
    );
  },
  checkModalComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(this.modalComponentLabelElement);
  },
  checkNewAppScreenComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.newAppScreenComponentLabelElement,
    );
  },
  checkPressableComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.pressableComponentLabelElement,
    );
  },
  checkRefreshControlComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.refreshControlComponentLabelElement,
    );
  },
  checkScrollViewComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.scrollViewComponentLabelElement,
    );
  },
  checkScrollViewAnimatedComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.scrollViewAnimatedComponentLabelElement,
    );
  },
  checkScrollViewSimpleExampleComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.scrollViewSimpleExampleComponentLabelElement,
    );
  },
  checkSectionListComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.sectionListComponentLabelElement,
    );
  },
  checkStatusBarComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.statusBarComponentLabelElement,
    );
  },
  checkSwipeableCardComponentIsDisplayed: async function (
    this: ComponentsScreenType,
  ): Promise<boolean> {
    return await Utils.checkElementExistence(
      this.swipeableCardComponentLabelElement,
    );
  },
  clickButtonComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.buttonComponentLabelElement);
  },
  clickActivityIndicatorComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.activityIndicatorComponentLabelElement);
  },
  clickKeyboardAvoidingViewComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.keyboardAvoidingViewComponentLabelElement);
  },
  clickFlatListComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.flatListComponentLabelElement);
  },
  clickJSResponderHandlerComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.jsResponderHandlerComponentLabelElement);
  },
  clickModalComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.modalComponentLabelElement);
  },
  clickNewAppScreenComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.newAppScreenComponentLabelElement);
  },
  clickPressableComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.pressableComponentLabelElement);
  },
  clickRefreshControlComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.refreshControlComponentLabelElement);
  },
  clickScrollViewComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.scrollViewComponentLabelElement);
  },
  clickScrollViewAnimatedComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.scrollViewAnimatedComponentLabelElement);
  },
  clickScrollViewSimpleExampleComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.scrollViewSimpleExampleComponentLabelElement);
  },
  clickSectionListComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.sectionListComponentLabelElement);
  },
  clickStatusBarComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.statusBarComponentLabelElement);
  },
  clickSwipeableCardComponent: async function (
    this: ComponentsScreenType,
  ): Promise<void> {
    await Utils.clickElement(this.swipeableCardComponentLabelElement);
  },
};
