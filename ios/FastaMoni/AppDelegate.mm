#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <GoogleMaps/GoogleMaps.h>
//#import <Firebase.h>
//#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
//#import <AppCenterReactNative.h>
//#import <AppCenterReactNativeAnalytics.h>
//#import <AppCenterReactNativeCrashes.h>
//#import <CodePush/CodePush.h>



@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Fasta Moni";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
// [AppCenterReactNativeShared setStartAutomatically:YES];
// [AppCenterReactNativeShared setAppSecret:@"{Your App Secret}"];
// [AppCenterReactNative register];
// [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
// [AppCenterReactNativeCrashes registerWithAutomaticProcessing];
 return [super application:application didFinishLaunchingWithOptions:launchOptions];
  
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
// {
//   return [self getBundleURL];
// }

// - (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  // return [CodePush bundleURL];
#endif
}

@end
