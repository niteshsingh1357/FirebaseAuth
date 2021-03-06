package com.firebaseauthapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.react.PackageList;
import com.airbnb.android.react.maps.MapsPackage;

import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // packages.add(new GoogleFitPackage(BuildConfig.APPLICATION_ID)); 
      // additional non auto detected packages can still be added here:
      // packages.add(new MapsPackage());
      // packages.add(new MainReactPackage(),
            new GeolocationPackage();
      return packages;
    }

    // @Override
    // protected List<ReactPackage> getPackages() {
    //   return Arrays.<ReactPackage>asList(
    //       new MainReactPackage(),
    //       new MapsPackage()
    //   );
    // }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
