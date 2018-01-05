//
//  TestLoginViewController.m
//  TestProject

#import "TestLoginViewController.h"

@implementation TestLoginViewController

- (IBAction)handleLogin:(id)sender {
  NSLog(@"Login tapped");
  [[NSNotificationCenter defaultCenter] postNotificationName:@"didLogIn" object:nil];
}

@end
