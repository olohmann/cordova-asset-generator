# cordova-asset-generator [![Build Status](https://travis-ci.org/olohmann/cordova-asset-generator.svg?branch=master)](https://travis-ci.org/olohmann/cordova-asset-generator)

> Utility to create assets for a typical Apache Cordova project in various sizes from a single **SVG file**.

## Install
Install globally via [npm](npmjs.org):

```bash
npm install --global cordova-asset-generator
```

## Usage

After installing the cordova-asset-generator globally, you can run `cordova-asset-generator` from the CLI to get the help output:

```bash
cordova-asset-generator 
```

### Passing a custom configuration

Example:
```bash
cordova-asset-generator --input logo.svg --outputDirectory /foo/bar --config /foo/foobar.json
```

`foobar.json`:
```json
{
  "icons": {
    "android": [
      {
        "file": "icon-36-ldpi.png",
        "height": 36,
        "width": 36
      },
      {
        "file": "icon-48-mdpi.png",
        "height": 48,
        "width": 48
      },
      {
        "file": "icon-72-hdpi.png",
        "height": 72,
        "width": 72
      },
      {
        "file": "icon-96-xhdpi.png",
        "height": 96,
        "width": 96
      }
    ],
    "ios": [
      {
        "file": "icon-40-2x.png",
        "height": 80,
        "width": 80
      },
      {
        "file": "icon-40.png",
        "height": 40,
        "width": 40
      },
      {
        "file": "icon-50-2x.png",
        "height": 100,
        "width": 100
      },
      {
        "file": "icon-50.png",
        "height": 50,
        "width": 50
      },
      {
        "file": "icon-57-2x.png",
        "height": 114,
        "width": 114
      },
      {
        "file": "icon-57.png",
        "height": 57,
        "width": 57
      },
      {
        "file": "icon-60-2x.png",
        "height": 120,
        "width": 120
      },
      {
        "file": "icon-60-3x.png",
        "height": 180,
        "width": 180
      },
      {
        "file": "icon-60.png",
        "height": 60,
        "width": 60
      },
      {
        "file": "icon-72-2x.png",
        "height": 144,
        "width": 144
      },
      {
        "file": "icon-72.png",
        "height": 72,
        "width": 72
      },
      {
        "file": "icon-76-2x.png",
        "height": 152,
        "width": 152
      },
      {
        "file": "icon-76.png",
        "height": 76,
        "width": 76
      },
      {
        "file": "icon-small-2x.png",
        "height": 58,
        "width": 58
      },
      {
        "file": "icon-small.png",
        "height": 29,
        "width": 29
      }
    ],
    "windows": [
      {
        "file": "Square150x150Logo.scale-100.png",
        "height": 150,
        "width": 150
      },
      {
        "file": "Square150x150Logo.scale-240.png",
        "height": 360,
        "width": 360
      },
      {
        "file": "Square30x30Logo.scale-100.png",
        "height": 30,
        "width": 30
      },
      {
        "file": "Square310x310Logo.scale-100.png",
        "height": 310,
        "width": 310
      },
      {
        "file": "Square44x44Logo.scale-240.png",
        "height": 106,
        "width": 106
      },
      {
        "file": "Square70x70Logo.scale-100.png",
        "height": 70,
        "width": 70
      },
      {
        "file": "Square71x71Logo.scale-240.png",
        "height": 170,
        "width": 170
      },
      {
        "file": "StoreLogo.scale-100.png",
        "height": 50,
        "width": 50
      },
      {
        "file": "StoreLogo.scale-240.png",
        "height": 120,
        "width": 120
      },
      {
        "file": "Wide310x150Logo.scale-100.png",
        "height": 150,
        "width": 310
      },
      {
        "file": "Wide310x150Logo.scale-240.png",
        "height": 360,
        "width": 744
      }
    ],
    "wp8": [
      {
        "file": "ApplicationIcon.png",
        "height": 99,
        "width": 99
      },
      {
        "file": "Background.png",
        "height": 159,
        "width": 159
      }
    ]
  },
  "screens": {
    "android": [
      {
        "file": "screen-hdpi-landscape.png",
        "height": 480,
        "width": 640
      },
      {
        "file": "screen-hdpi-portrait.png",
        "height": 640,
        "width": 480
      },
      {
        "file": "screen-ldpi-landscape.png",
        "height": 320,
        "width": 426
      },
      {
        "file": "screen-ldpi-portrait.png",
        "height": 426,
        "width": 320
      },
      {
        "file": "screen-mdpi-landscape.png",
        "height": 320,
        "width": 470
      },
      {
        "file": "screen-mdpi-portrait.png",
        "height": 470,
        "width": 320
      },
      {
        "file": "screen-xhdpi-landscape.png",
        "height": 720,
        "width": 960
      },
      {
        "file": "screen-xhdpi-portrait.png",
        "height": 960,
        "width": 720
      }
    ],
    "ios": [
      {
        "file": "screen-ipad-landscape-2x.png",
        "height": 1536,
        "width": 2048
      },
      {
        "file": "screen-ipad-landscape.png",
        "height": 768,
        "width": 1024
      },
      {
        "file": "screen-ipad-portrait-2x.png",
        "height": 2048,
        "width": 1536
      },
      {
        "file": "screen-ipad-portrait.png",
        "height": 1024,
        "width": 768
      },
      {
        "file": "screen-iphone-568h-2x.png",
        "height": 1136,
        "width": 640
      },
      {
        "file": "screen-iphone-landscape-736h.png",
        "height": 1242,
        "width": 2208
      },
      {
        "file": "screen-iphone-portrait-2x.png",
        "height": 960,
        "width": 640
      },
      {
        "file": "screen-iphone-portrait-677h.png",
        "height": 1334,
        "width": 750
      },
      {
        "file": "screen-iphone-portrait-736h.png",
        "height": 2208,
        "width": 1242
      },
      {
        "file": "screen-iphone-portrait.png",
        "height": 480,
        "width": 320
      }
    ],
    "windows": [
      {
        "file": "SplashScreen.scale-100.png",
        "height": 300,
        "width": 620
      },
      {
        "file": "SplashScreen.scale-240.png",
        "height": 1920,
        "width": 1152
      },
      {
        "file": "SplashScreenPhone.scale-240.png",
        "height": 1920,
        "width": 1152
      }
    ],
    "wp8": [
      {
        "file": "SplashScreenImage.jpg",
        "height": 1280,
        "width": 768
      }
    ]
  }
}
```

## Author

**[Oliver Lohmann](https://github.com/olohmann)**

## License
MIT. Copyright (c) 2015-09-24 Oliver Lohmann, contributors.
