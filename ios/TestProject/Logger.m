//
//  Logger.m
//  TestProject
//
//  Created by Michael Gani on 1/5/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "Logger.h"

@implementation Logger

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(logEvent:(NSString *)name)
{
  NSLog(@"logEvent: %@", name);
}

RCT_EXPORT_METHOD(logout)
{
  [[NSNotificationCenter defaultCenter] postNotificationName:@"didLogout" object:nil];
}

@end
