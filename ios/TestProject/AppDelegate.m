/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCCManager.h"
#import "TestLoginViewController.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate
{
  BOOL _jsLoaded;
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didLogIn) name:@"didLogIn" object:nil];
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didLogout) name:@"didLogout" object:nil];

  // Initialize RN
  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation launchOptions:@{}];

//  BOOL loggedIn = NO;
//  if (loggedIn) {
//    [self didLogIn];
//  } else {
//    // Storyboard already configured in Info.plist
//    // Otherwise, set up manually like:
//    // https://stackoverflow.com/questions/22653993/programmatically-change-rootviewcontroller-of-storyboard
//  }
  
//  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
//    [self presentLoginScreen];
//  });

  return YES;
}

- (void)applicationWillTerminate:(UIApplication *)application
{
  [[NSNotificationCenter defaultCenter] removeObserver:self name:@"didLogIn" object:nil];
  [[NSNotificationCenter defaultCenter] removeObserver:self name:@"didLogout" object:nil];
}

- (void)didLogIn
{
  [[self.window.rootViewController presentedViewController] dismissViewControllerAnimated:YES completion:nil];
}

- (void)didLogout
{
  [self presentLoginScreen];
}

- (void)presentLoginScreen
{
  UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Storyboard" bundle:nil];
  UIViewController *vc = [storyboard instantiateInitialViewController];
  [self.window.rootViewController presentViewController:vc animated:YES completion:nil];
}


@end
