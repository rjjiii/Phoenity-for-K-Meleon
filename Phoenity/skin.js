// --------------------------------------------------------------------
// Default Toolbar Positions				  
// --------------------------------------------------------------------
// 
// NOTE: This entire file is optional. You can leave it blank or delete
//       it and your skin will still work fine. If you're unsure about
//       these preferences just clear or delete this document. The skin
//       will behave more predictably if these preferences do not exist.
//       These preferences will only consistently set up a theme on a 
//       fresh profile/installation of K-Meleon.
//
// This sets up the default toolbar positions for K-Meleon. If K-Meleon 
// runs for the first time or switches to a new theme before the user
// sets their own preferences, then the browser will use this file. 
// After the user changes ANY preference, the browser will use the pref 
// from prefs.js instead of skin.js even if the user is switching to a 
// new theme for the first time. Any pref that can appear in prefs.js
// or user.js can be used here. Commonly used toolband prefs for skins
// are explained below:
//
// .index   #:  Render the toolbars in this order moving from left to 
//              right and top to bottom.
// .break   0:  Place the toolbar to the right of the previous toolbar 
//              if it fits.
//          1:  Place the toolbar on a new line starting at the left
//              edge of the browser window.
// .size    #:  Give the toolbar this minimum width. K-Meleon should not
//              make toolbars too small to contain all of their buttons.
//              You'll use this if you need to create space between
//              buttons on the toolbar. You can set it to a very large
//              number to right-align the following icons. Look at the
//              "URL Bar" for an example.
// .visibility: This will hide the toolbar if "false" and will display
//              it if "true".
//
// --------------------------------------------------------------------

pref("kmeleon.toolband.&Go Buttons.break", 0);
pref("kmeleon.toolband.&Go Buttons.index", 8);
pref("kmeleon.toolband.&Go Buttons.visibility", true);
pref("kmeleon.toolband.Mail/&News Buttons.break", 0);
pref("kmeleon.toolband.Mail/&News Buttons.index", 4);
pref("kmeleon.toolband.Mail/&News Buttons.visibility", true);
pref("kmeleon.toolband.&Main Bar.break", 1);
pref("kmeleon.toolband.&Main Bar.index", 3);
pref("kmeleon.toolband.&Main Bar.visibility", true);
pref("kmeleon.toolband.Menu.break", 0);
pref("kmeleon.toolband.Menu.index", 0);
pref("kmeleon.toolband.Menu.size", 1600);
pref("kmeleon.toolband.Menu.visibility", true);
pref("kmeleon.toolband.&Privacy Bar.break", 0);
pref("kmeleon.toolband.&Privacy Bar.index", 9);
pref("kmeleon.toolband.&Privacy Bar.visibility", false);
pref("kmeleon.toolband.&Search Buttons.break", 0);
pref("kmeleon.toolband.&Search Buttons.index", 6);
pref("kmeleon.toolband.&Search Buttons.visibility", true);
pref("kmeleon.toolband.Tab/&Window Buttons.break", 0);
pref("kmeleon.toolband.Tab/&Window Buttons.index", 1);
pref("kmeleon.toolband.Tab/&Window Buttons.visibility", true);
pref("kmeleon.toolband.Tabs.break", 1);
pref("kmeleon.toolband.Tabs.index", 10);
pref("kmeleon.toolband.Tabs.visibility", true);
// On 75+ this sets the heigh of the tab bar:
pref("kmeleon.display.toolbars_size", 16);
pref("kmeleon.toolband.Throbber.break", 0);
pref("kmeleon.toolband.Throbber.index", 2);
pref("kmeleon.toolband.Throbber.visibility", true);
pref("kmeleon.toolband.URL Bar.break", 0);
pref("kmeleon.toolband.URL Bar.index", 7);
pref("kmeleon.toolband.URL Bar.size", 1600);
pref("kmeleon.toolband.URL Bar.visibility", true);
pref("kmeleon.toolband.&Zoom Buttons.break", 0);
pref("kmeleon.toolband.&Zoom Buttons.index", 5);
pref("kmeleon.toolband.&Zoom Buttons.visibility", true);