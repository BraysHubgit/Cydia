/*
var appname = 'MovieBox';
var appVersionStr = 'v 4.6';
var appIconStr = 'images/dreamstore/icon/windows.png';
var appInstallURL = 'http://pangu8.com/Z/secure/p-metaws.mobileconfig';
var screenshots1Str = 'images/dreamstore/screenshots/windows1.png';
var screenshots2Str = 'images/dreamstore/screenshots/spin1.png';
var screenshots3Str = '';
var screenshots4Str = 'images/dreamstore/screenshots/spin3.png';
var screenshots5Str = 'images/dreamstore/screenshots/gray3.png';
*/

var appname = '',
	appVersionStr = '',
	appIconStr = '',
	appInstallURL = '',
	screenshots1Str = '',
	screenshots2Str = '',
	screenshots3Str = '',
	screenshots4Str = '',
	screenshots5Str = '';


function setAppInfo(appnum){
	appname = window['app'+appnum][0];
	appVersionStr = window['app'+appnum][1];
	appIconStr = window['app'+appnum][2];
	appInstallURL = window['app'+appnum][3];
	screenshots1Str = window['app'+appnum][4];
	screenshots2Str = window['app'+appnum][5];
	screenshots3Str = window['app'+appnum][6];
	screenshots4Str = window['app'+appnum][7];
	screenshots5Str = window['app'+appnum][8];
	
}

//Array structure
//var appverialble = ["AppName", "AppVersion", "AppIconAddress", "AppConfigURL", "AppScreeshot1", "AppScreenshot2", "AppScreenshot3", "AppScreenshot4", "AppScreenshot5"];
//var app001 = ["","","","","","","","",""];


// --- DreamStore ---

var app001 = ["Dreamstore","","images/app_install_page/dreamstore/icon/dreamstore.png","http://files.iextras.org/app/12/dreamstore/secure/main.mobileconfig","images/app_install_page/dreamstore/screenshot/dreamstore.jpg","images/app_install_page/dreamstore/screenshot/dreamstore1.jpg","","",""];
var app002 = ["Popit","","images/app_install_page/dreamstore/icon/popit.png","http://files.iextras.org/app/12/dreamstore/secure/popit.mobileconfig","images/app_install_page/dreamstore/screenshot/popit.png","images/app_install_page/dreamstore/screenshot/popit1.png","","",""];
var app003 = ["Iceburg","","images/app_install_page/dreamstore/icon/iceburg.png","http://files.iextras.org/app/12/dreamstore/secure/iceburg.mobileconfig","images/app_install_page/dreamstore/screenshot/iceburg.png","images/app_install_page/dreamstore/screenshot/iceburg1.png","","",""];
var app004 = ["Rainydrops","","images/app_install_page/dreamstore/icon/rainydrops.png","http://files.iextras.org/app/12/dreamstore/secure/rainydrops.mobileconfig","images/app_install_page/dreamstore/screenshot/rainydrops.png","images/app_install_page/dreamstore/screenshot/rainydrops1.png","","",""];
var app005 = ["iOrange","","images/app_install_page/dreamstore/icon/iorange.png","http://files.iextras.org/app/12/dreamstore/secure/iorange.mobileconfig","images/app_install_page/dreamstore/screenshot/iorange.png","images/app_install_page/dreamstore/screenshot/iorange1.png","","",""];
var app006 = ["Raizer","","images/app_install_page/dreamstore/icon/raizer.png","http://files.iextras.org/app/12/dreamstore/secure/raizer.mobileconfig","images/app_install_page/dreamstore/screenshot/raizer.png","images/app_install_page/dreamstore/screenshot/raizer1.png","","",""];
var app007 = ["Pointview","","images/app_install_page/dreamstore/icon/pointview.png","http://files.iextras.org/app/12/dreamstore/secure/pointview.mobileconfig","images/app_install_page/dreamstore/screenshot/pointview.png","images/app_install_page/dreamstore/screenshot/pointview1.png","","",""];
var app008 = ["Bubble","","images/app_install_page/dreamstore/icon/bubble.png","http://files.iextras.org/app/12/dreamstore/secure/bubble.mobileconfig","images/app_install_page/dreamstore/screenshot/bubble.png","images/app_install_page/dreamstore/screenshot/bubble1.png","","",""];
var app009 = ["Winter","","images/app_install_page/dreamstore/icon/winter.png","http://files.iextras.org/app/12/dreamstore/secure/winter.mobileconfig","images/app_install_page/dreamstore/screenshot/winter.png","images/app_install_page/dreamstore/screenshot/winter1.png","","",""];
var app010 = ["Slumper","","images/app_install_page/dreamstore/icon/slumper.png","http://files.iextras.org/app/12/dreamstore/secure/slumper.mobileconfig","images/app_install_page/dreamstore/screenshot/slumper.png","images/app_install_page/dreamstore/screenshot/slumper1.png","","",""];
var app011 = ["pearl Effect","","images/app_install_page/dreamstore/icon/pearleffect.png","http://files.iextras.org/app/12/dreamstore/secure/pearleffect.mobileconfig","images/app_install_page/dreamstore/screenshot/pearleffect.png","images/app_install_page/dreamstore/screenshot/pearleffect1.png","","",""];
var app012 = ["Autumn","","images/app_install_page/dreamstore/icon/autumn.png","http://files.iextras.org/app/12/dreamstore/secure/autumn.mobileconfig","images/app_install_page/dreamstore/screenshot/autumn.png","images/app_install_page/dreamstore/screenshot/autumn1.png","","",""];


// ---- Flemino ----
var app013 = ["Flemino","","images/app_install_page/flemino/flemino.png","http://files.iextras.org/app/12/flemino/secure/flemino.mobileconfig","images/app_install_page/flemino/screenshot/flemino-min.jpg","images/app_install_page/flemino/screenshot/flemino1-min.jpg","","",""];
var app014 = ["Mac lion","","images/app_install_page/os_store/icon/mac_lion_os.png","https://files.iextras.org/app/flemino/secure/mac_lions.mobileconfig","images/app_install_page/os_store/screenshot/mac_lion_os.png","","","",""];
var app015 = ["Macintosh OS 8.6","","images/app_install_page/os_store/icon/mac_os_86.png","http://iextras.org/zjailbreak/apps/secure/os/mac-os8.mobileconfig","images/app_install_page/os_store/screenshot/mac_os_86.png","","","",""];
var app016 = ["Macintosh OS 9.2","","images/app_install_page/os_store/icon/mac_os_92.png","http://iextras.org/zjailbreak/apps/secure/os/mac-os9.mobileconfig","images/app_install_page/os_store/screenshot/mac_os_92.png","","","",""];
var app017 = ["Macintosh OS X 10.4","","images/app_install_page/os_store/icon/mac_osx104s.png","http://iextras.org/zjailbreak/apps/secure/os/mac-osx104.mobileconfig","images/app_install_page/os_store/screenshot/mac_104.png","","","",""];
var app018 = ["Windows 95a","","images/app_install_page/os_store/icon/win_95_a.png","http://iextras.org/zjailbreak/apps/secure/os/windows-95a.mobileconfig","images/app_install_page/os_store/screenshot/win_95_a.png","","","",""];
var app019 = ["Windows 95c","","images/app_install_page/os_store/icon/win_95_c.png","http://iextras.org/zjailbreak/apps/secure/os/windows-95c.mobileconfig","images/app_install_page/os_store/screenshot/win_95_c.png","","","",""];
var app020 = ["Windows 98","","images/app_install_page/os_store/icon/win_98.png","http://iextras.org/zjailbreak/apps/secure/os/windows-98.mobileconfig","images/app_install_page/os_store/screenshot/win_98.png","","","",""];
var app021 = ["Windows 98 SE","","images/app_install_page/os_store/icon/win_98_se.png","http://iextras.org/zjailbreak/apps/secure/os/windows-98-se.mobileconfig","images/app_install_page/os_store/screenshot/win_98_se.png","","","",""];
var app022 = ["Windows ME","","images/app_install_page/os_store/icon/win_me.png","http://iextras.org/zjailbreak/apps/secure/os/windows-me.mobileconfig","images/app_install_page/os_store/screenshot/win_me.png","","","",""];
var app023 = ["Windows NT4","","images/app_install_page/os_store/icon/win_nt4.png","http://iextras.org/zjailbreak/apps/secure/os/windows-nt4.mobileconfig","images/app_install_page/os_store/screenshot/win_nt4.png","","","",""];
var app024 = ["Windows XP","","images/app_install_page/os_store/icon/win_xp.png","http://iextras.org/zjailbreak/apps/secure/os/windows-xp.mobileconfig","images/app_install_page/os_store/screenshot/win_xp.png","","","",""];
var app025 = ["Windows XP Pro SP2","","images/app_install_page/os_store/icon/win_xp_pro_sp2.png","http://iextras.org/zjailbreak/apps/secure/os/windows-xp-sp2.mobileconfig","images/app_install_page/os_store/screenshot/win_xp_pro.png","","","",""];



// ---- iNifty Themes ----
var app026 = ["iNifty","","images/app_install_page/inifty/inifty.png","http://files.iextras.org/app/secure/apps/iniftyn.mobileconfig","images/app_install_page/inifty/screenshot/inifty.PNG","images/app_install_page/inifty/screenshot/inifty-1.jpg","","",""];
var app027 = ["Craven","","images/app_install_page/inifty/craven.jpg","http://files.iextras.org/app/inifty-theme/secure/craven.mobileconfig","images/app_install_page/inifty/screenshot/craven.jpg","","","",""];
var app028 = ["Side Box 3D","","images/app_install_page/inifty/sidebox-3d.jpg","http://files.iextras.org/app/inifty-theme/secure/sidebox.mobileconfig","images/app_install_page/inifty/screenshot/sidebox.jpg","","","",""];
var app029 = ["Candy","","images/app_install_page/inifty/candy.jpg","http://files.iextras.org/app/inifty-theme/secure/candy.mobileconfig","images/app_install_page/inifty/screenshot/candy.jpg","","","",""];
var app030 = ["WhiteDrawn","","images/app_install_page/inifty/whitedrawn.jpg","http://files.iextras.org/app/inifty-theme/secure/whitedrawn.mobileconfig","images/app_install_page/inifty/screenshot/white-drawn.png","","","",""];
var app031 = ["Desa 1","","images/app_install_page/inifty/desa-1.jpg","http://files.iextras.org/app/inifty-theme/secure/desa.mobileconfig","images/app_install_page/inifty/screenshot/desa.png","","","",""];
var app032 = ["Red Attract","","images/app_install_page/inifty/redattract-3d.jpg","http://files.iextras.org/app/inifty-theme/secure/red-attract.mobileconfig","images/app_install_page/inifty/screenshot/red-attract.jpg","","","",""];
var app033 = ["Dark Glow 3D","","images/app_install_page/inifty/dark-glow.jpg","http://files.iextras.org/app/inifty-theme/secure/dark-glow.mobileconfig","images/app_install_page/inifty/screenshot/dark-glow.jpg","","","",""];
var app034 = ["Lanting","","images/app_install_page/inifty/lanting.jpg","http://files.iextras.org/app/inifty-theme/secure/lanting.mobileconfig","images/app_install_page/inifty/screenshot/lanting.jpg","","","",""];
var app035 = ["Ace N iOS theme","","images/app_install_page/inifty/ace-theme.jpg","http://files.iextras.org/app/inifty-theme/secure/ace-n-theme.mobileconfig","images/app_install_page/inifty/screenshot/acn-n-theme-min.jpg","","","",""];
var app036 = ["Ando iOS","","images/app_install_page/inifty/ando-ios.jpg","http://files.iextras.org/app/inifty-theme/secure/ando-ios.mobileconfig","images/app_install_page/inifty/screenshot/ando-ios-min.jpg","","","",""];
var app037 = ["Black Boom","","images/app_install_page/inifty/black-boom.jpg","http://files.iextras.org/app/inifty-theme/secure/black-boom.mobileconfig","images/app_install_page/inifty/screenshot/black-boom-min.jpg","","","",""];
var app038 = ["Blue World","","images/app_install_page/inifty/blue-world.jpg","http://files.iextras.org/app/inifty-theme/secure/blue-world.mobileconfig","images/app_install_page/inifty/screenshot/blue-world-min.jpg","","","",""];
var app039 = ["Box Green","","images/app_install_page/inifty/box-green.jpg","http://files.iextras.org/app/inifty-theme/secure/boxgreen.mobileconfig","images/app_install_page/inifty/screenshot/box-green-min.jpg","","","",""];
var app040 = ["Caricature iOS","","images/app_install_page/inifty/caricature-ios.jpg","http://files.iextras.org/app/inifty-theme/secure/caricature-ios.mobileconfig","images/app_install_page/inifty/screenshot/caricature-min.jpg","","","",""];
var app041 = ["Circle Bee","","images/app_install_page/inifty/circle-bee.jpg","http://files.iextras.org/app/inifty-theme/secure/circle-bee.mobileconfig","images/app_install_page/inifty/screenshot/circle-bee-min.jpg","","","",""];
var app042 = ["Circle icons extreme","","images/app_install_page/inifty/circle-extreme.jpg","http://files.iextras.org/app/inifty-theme/secure/circle-iextreme.mobileconfig","images/app_install_page/inifty/screenshot/circle-icons-extreme-min.jpg","","","",""];
var app043 = ["Cirtangle Shadow","","images/app_install_page/inifty/cirtangle-shadow.jpg","http://files.iextras.org/app/inifty-theme/secure/cirtangle-shadow.mobileconfig","images/app_install_page/inifty/screenshot/cirtangle-shadow-min.jpg","","","",""];
var app044 = ["Coedo","","images/app_install_page/inifty/coedo.jpg","http://files.iextras.org/app/inifty-theme/secure/coedo.mobileconfig","images/app_install_page/inifty/screenshot/coedo-min.jpg","","","",""];
var app045 = ["Craven","","images/app_install_page/inifty/craven.jpg","http://files.iextras.org/app/inifty-theme/secure/craven.mobileconfig","images/app_install_page/inifty/screenshot/craven.jpg","","","",""];
var app046 = ["Dark Moon","","images/app_install_page/inifty/dark-moon.jpg","http://files.iextras.org/app/inifty-theme/secure/black-moon.mobileconfig","images/app_install_page/inifty/screenshot/dark-moon-min.jpg","","","",""];
var app047 = ["Dent","","images/app_install_page/inifty/dent.jpg","http://files.iextras.org/app/inifty-theme/secure/dent.mobileconfig","images/app_install_page/inifty/screenshot/dent-min.jpg","","","",""];
var app048 = ["Emojis","","images/app_install_page/inifty/emojis.jpg","http://files.iextras.org/app/inifty-theme/secure/emojis.mobileconfig","images/app_install_page/inifty/screenshot/imojis-min.png","","","",""];
var app049 = ["Green on Pink","","images/app_install_page/inifty/green-on-pink.jpg","http://files.iextras.org/app/inifty-theme/secure/green-on-pink.mobileconfig","images/app_install_page/inifty/screenshot/green-pink-min.jpg","","","",""];
var app050 = ["iKitPack","","images/app_install_page/inifty/ikitpack.jpg","http://files.iextras.org/app/inifty-theme/secure/ikitpack.mobileconfig","images/app_install_page/inifty/screenshot/ikitpack-min.jpg","","","",""];
var app051 = ["Muze 3","","images/app_install_page/inifty/muze-3.jpg","http://files.iextras.org/app/inifty-theme/secure/muze.mobileconfig","images/app_install_page/inifty/screenshot/muze-min.jpg","","","",""];
var app052 = ["Neon","","images/app_install_page/inifty/neon.jpg","http://files.iextras.org/app/inifty-theme/secure/neon.mobileconfig","images/app_install_page/inifty/screenshot/neon-min.jpg","","","",""];
var app053 = ["Orange Light","","images/app_install_page/inifty/orange-light.jpg","http://files.iextras.org/app/inifty-theme/secure/orange-light.mobileconfig","images/app_install_page/inifty/screenshot/orange-light-min.png","","","",""];
var app054 = ["Oyster","","images/app_install_page/inifty/oyster.jpg","http://files.iextras.org/app/inifty-theme/secure/oyster.mobileconfig","images/app_install_page/inifty/screenshot/oyster-min.jpg","","","",""];
var app055 = ["Pink Moon","","images/app_install_page/inifty/pink-moon.jpg","http://files.iextras.org/app/inifty-theme/secure/pink-moon.mobileconfig","images/app_install_page/inifty/screenshot/pink-moon-min.png","","","",""];
var app056 = ["Pop Blue HD","","images/app_install_page/inifty/pop-blue-hd.jpg","http://files.iextras.org/app/inifty-theme/secure/pop-blue-hd.mobileconfig","images/app_install_page/inifty/screenshot/pop-blue-min.jpg","","","",""];
var app057 = ["Red iShadow","","images/app_install_page/inifty/red-ishadow.jpg","http://files.iextras.org/app/inifty-theme/secure/red-ishadow.mobileconfig","images/app_install_page/inifty/screenshot/red-ishadow-min.png","","","",""];
var app058 = ["Retrofit iOS","","images/app_install_page/inifty/retrofit-ios.jpg","http://files.iextras.org/app/inifty-theme/secure/retrofit-ios.mobileconfig","images/app_install_page/inifty/screenshot/retrofit-ios-min.jpg","","","",""];
var app059 = ["Shiny Purple","","images/app_install_page/inifty/shiny-purple.jpg","http://files.iextras.org/app/inifty-theme/secure/shiny-purple.mobileconfig","images/app_install_page/inifty/screenshot/shiny-purple-min.png","","","",""];
var app060 = ["UnPivot for iOS","","images/app_install_page/inifty/unpivot-for-ios.jpg","http://files.iextras.org/app/inifty-theme/secure/unpivot-ios.mobileconfig","images/app_install_page/inifty/screenshot/unpivot-min.jpg","","","",""];
var app061 = ["Zoko","","images/app_install_page/inifty/zuko.jpg","http://files.iextras.org/app/inifty-theme/secure/zuko.mobileconfig","images/app_install_page/inifty/screenshot/zuko-min.jpg","","","",""];
var app062 = ["Simply & Cute","","images/app_install_page/inifty/simply-cute.png","http://files.iextras.org/app/inifty-theme/secure/simplycute.mobileconfig","images/app_install_page/inifty/screenshot/simplycute-min.jpg","","","",""];


// --- Googios ---
var app063 = ["Googios","","images/app_install_page/zjailbreak/icon/googios.png","http://files.iextras.org/app/secure/apps/goog-ios.mobileconfig","","","","",""];
var app064 = ["Color Dots","","images/app_install_page/googios/icon/color_dots.png","http://files.iextras.org/app/12/googios/secure/color-dots.mobileconfig","images/app_install_page/googios/screenshot/color_dots.png","","","",""];
var app065 = ["Color Triangle","","images/app_install_page/googios/icon/color_triangles.png","http://files.iextras.org/app/12/googios/secure/color-trangles.mobileconfig","images/app_install_page/googios/screenshot/color_triangles.png","","","",""];
var app066 = ["Color Box","","images/app_install_page/googios/icon/color_box.png","http://files.iextras.org/app/12/googios/secure/color-box.mobileconfig","images/app_install_page/googios/screenshot/color_box.png","","","",""];
var app067 = ["3D Earth","","images/app_install_page/googios/icon/3d_earth.png","http://files.iextras.org/app/12/googios/secure/earth.mobileconfig","images/app_install_page/googios/screenshot/3d_earth.png","","","",""];
var app068 = ["Colored Spaces","","images/app_install_page/googios/icon/colored_spaces.png","http://files.iextras.org/app/12/googios/secure/colored-space.mobileconfig","images/app_install_page/googios/screenshot/colored_spaces.png","","","",""];
var app069 = ["Fire Gclock","","images/app_install_page/googios/icon/fire_gclock.png","http://files.iextras.org/app/12/googios/secure/fire-gclock.mobileconfig","images/app_install_page/googios/screenshot/fire_gclock.png","","","",""];
var app070 = ["Glitter","","images/app_install_page/googios/icon/glitter.png","http://files.iextras.org/app/12/googios/secure/glitter.mobileconfig","images/app_install_page/googios/screenshot/glitter.png","","","",""];
var app071 = ["Googfire","","images/app_install_page/googios/icon/googfire.png","http://files.iextras.org/app/12/googios/secure/google-fire.mobileconfig","images/app_install_page/googios/screenshot/googfire.png","","","",""];
var app072 = ["Pentagon","","images/app_install_page/googios/icon/pentagon.png","http://files.iextras.org/app/12/googios/secure/pentagon.mobileconfig","images/app_install_page/googios/screenshot/pentagon.png","","","",""];
var app073 = ["pond","","images/app_install_page/googios/icon/pond.png","http://files.iextras.org/app/12/googios/secure/pond.mobileconfig","images/app_install_page/googios/screenshot/pond.png","","","",""];
var app074 = ["Christmas snow","","images/app_install_page/googios/icon/christmas_snow.png","http://files.iextras.org/app/12/googios/secure/christmas-snow.mobileconfig","images/app_install_page/googios/screenshot/christmas_snow.png","","","",""];
var app075 = ["Color Circle","","images/app_install_page/googios/icon/color_circle.png","http://files.iextras.org/app/12/googios/secure/color-circle.mobileconfig","images/app_install_page/googios/screenshot/color_circle.png","","","",""];
var app076 = ["GoogCirculator","","images/app_install_page/googios/icon/googcirculator.png","http://files.iextras.org/app/12/googios/secure/gg-circulator.mobileconfig","images/app_install_page/googios/screenshot/googcirculator.png","","","",""];
var app077 = ["Hang","","images/app_install_page/googios/icon/hang.png","http://files.iextras.org/app/12/googios/secure/hang.mobileconfig","images/app_install_page/googios/screenshot/hang.png","","","",""];
var app078 = ["Rain Clouds","","images/app_install_page/googios/icon/rain_clouds.png","http://files.iextras.org/app/12/googios/secure/rain-clouds.mobileconfig","images/app_install_page/googios/screenshot/rain_clouds.png","","","",""];
var app079 = ["Space","","images/app_install_page/googios/icon/space.png","http://files.iextras.org/app/12/googios/secure/space.mobileconfig","images/app_install_page/googios/screenshot/space.png","","","",""];
var app080 = ["StarSystem","","images/app_install_page/googios/icon/star_system.png","http://files.iextras.org/app/12/googios/secure/star-system.mobileconfig","images/app_install_page/googios/screenshot/star_system.png","","","",""];
var app081 = ["Triangle","","images/app_install_page/googios/icon/triangle.png","http://files.iextras.org/app/12/googios/secure/triangle.mobileconfig","images/app_install_page/googios/screenshot/triangle.png","","","",""];


// ---- iFaceSkins ----
var app082 = ["iFaceskins","","images/app_install_page/zjailbreak/icon/ifaceskins.png","http://files.iextras.org/app/secure/apps/iface-skins.mobileconfig","","","","",""];
var app083 = ["Color Fold","","images/app_install_page/ifaceskins/icon/color_fold.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/colors-fold.mobileconfig","images/app_install_page/ifaceskins/screenshot/color_fold.png","","","",""];
var app084 = ["Christmas Snow","","images/app_install_page/ifaceskins/icon/cristmas_snow.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/christmas-snow.mobileconfig","images/app_install_page/ifaceskins/screenshot/cristmas_snow.png","","","",""];
var app085 = ["Moving FB","","images/app_install_page/ifaceskins/icon/moving_fb.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/theme-move.mobileconfig","images/app_install_page/ifaceskins/screenshot/moving_fb.png","","","",""];
var app086 = ["BlueBubble","","images/app_install_page/ifaceskins/icon/blue_bubble.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/blue-bubble.mobileconfig","images/app_install_page/ifaceskins/screenshot/blue_bubble.png","","","",""];
var app087 = ["Eye","","images/app_install_page/ifaceskins/icon/eye.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/theme-ye.mobileconfig","images/app_install_page/ifaceskins/screenshot/eye.png","","","",""];
var app088 = ["FB Slides","","images/app_install_page/ifaceskins/icon/fb_slider.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/slides.mobileconfig","images/app_install_page/ifaceskins/screenshot/fb_slider.png","","","",""];
var app089 = ["Blue Wall","","images/app_install_page/ifaceskins/icon/blue_wall.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/blue-wall.mobileconfig","images/app_install_page/ifaceskins/screenshot/blue_wall.png","","","",""];
var app090 = ["Face PopUp","","images/app_install_page/ifaceskins/icon/face_popup.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/pop-up.mobileconfig","images/app_install_page/ifaceskins/screenshot/face_popup.png","","","",""];
var app091 = ["Theme Blue Sky","","images/app_install_page/ifaceskins/icon/blue_sky.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/blue-sky.mobileconfig","images/app_install_page/ifaceskins/screenshot/blue_sky.png","","","",""];
var app092 = ["Theme FB Colors","","images/app_install_page/ifaceskins/icon/fb_colors.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/fb-colors.mobileconfig","images/app_install_page/ifaceskins/screenshot/fb_colors.png","","","",""];
var app093 = ["Red Hearts","","images/app_install_page/ifaceskins/icon/red_hearts.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/red-heart.mobileconfig","images/app_install_page/ifaceskins/screenshot/red_hearts.png","","","",""];
var app094 = ["Rainbow","","images/app_install_page/ifaceskins/icon/rainbow.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/rainbow.mobileconfig","images/app_install_page/ifaceskins/screenshot/rainbow.png","","","",""];
var app095 = ["Rotate Circle","","images/app_install_page/ifaceskins/icon/rotate_circle.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/rotate-circle.mobileconfig","images/app_install_page/ifaceskins/screenshot/rotate_circle.png","","","",""];
var app096 = ["White Diamond","","images/app_install_page/ifaceskins/icon/white_diomand.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/white-diamond.mobileconfig","images/app_install_page/ifaceskins/screenshot/white_diomand.png","","","",""];
var app097 = ["Magic Box","","images/app_install_page/ifaceskins/icon/magic_box.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/magic-box.mobileconfig","images/app_install_page/ifaceskins/screenshot/magic_box.png","","","",""];
var app098 = ["Solar System","","images/app_install_page/ifaceskins/icon/solar_system.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/solar-system.mobileconfig","images/app_install_page/ifaceskins/screenshot/solar_system.png","","","",""];
var app099 = ["Ribbon","","images/app_install_page/ifaceskins/icon/ribbon.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/ribbon.mobileconfig","images/app_install_page/ifaceskins/screenshot/ribbon.png","","","",""];
var app100 = ["Sea Waves","","images/app_install_page/ifaceskins/icon/sea_waves.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/sea-waves.mobileconfig","images/app_install_page/ifaceskins/screenshot/sea_waves.png","","","",""];
var app101 = ["FB Dreams","","images/app_install_page/ifaceskins/icon/fb_dreams.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/dream.mobileconfig","images/app_install_page/ifaceskins/screenshot/fb_dream.png","","","",""];
var app102 = ["iColours","","images/app_install_page/ifaceskins/icon/icolors.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/icolours.mobileconfig","images/app_install_page/ifaceskins/screenshot/icolor.png","","","",""];
var app103 = ["Color Changer","","images/app_install_page/ifaceskins/icon/color_manager.png","http://files.iextras.org/app/ifaceskins/secure/fb-theme/color-changes.mobileconfig","images/app_install_page/ifaceskins/screenshot/color_changer.png","","","",""];


//--- zJailbreak ----

var app104 = ["FND Store","","images/app_install_page/zjailbreak/icon/find_store.png","http://install.zjailbreak.com/app/zjailbreak/13/free/secure/app/fnd-store.mobileconfig","images/app_install_page/zjailbreak/screenshot/fndstore1.png","images/app_install_page/zjailbreak/screenshot/fndstore2.png","","",""];
var app105 = ["Metaw","","images/app_install_page/metaw/icon/metaw.png","http://files.iextras.org/app/secure/apps/metaw.mobileconfig","images/app_install_page/metaw/screenshot/metaw.jpg","images/app_install_page/metaw/screenshot/metaw1.jpg","images/app_install_page/metaw/screenshot/metaw2.jpg","",""];
var app106 = ["Hopy","","images/app_install_page/hopy/icon/hopy.png","http://install.zjailbreak.com/app/zjailbreak/13/free/secure/app/hopy.mobileconfig","images/app_install_page/hopy/screenshot/hopy.jpg","","","",""];
var app107 = ["Yiv","","images/app_install_page/yiv/icon/yiv.png","http://install.zjailbreak.com/app/zjailbreak/13/free/secure/app/yiv-store.mobileconfig","images/app_install_page/yiv/screenshot/yiv.jpg","","","",""];


/*=========== +++++ ========== */
/*=========== plist ========== */
/*=========== +++++ ========== */

var app108 = ["Facebook++ (Gold)","","images/app_install_page/plist/icon/facebook++_gold.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Facebook/facebook.plist","images/app_install_page/plist/screenshot/facebook++.png","","","",""];
var app109 = ["Twitter ++ (Gold)","","images/app_install_page/plist/icon/twitter++_gold.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/3040105.plist","images/app_install_page/plist/screenshot/twitter++1.png","images/app_install_page/plist/screenshot/twitter++2.png","","",""];
var app110 = ["WhatsApp ++","","images/app_install_page/plist/icon/whatsapp++.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2730710.plist","images/app_install_page/plist/screenshot/whatsapp.png","","","","",""];
var app111 = ["YouTube++","","images/app_install_page/plist/icon/youtube++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/YouTube/youtube.plist","images/app_install_page/plist/screenshot/youtube++.png","","",""];
var app112 = ["Snapchat ++","","images/app_install_page/plist/icon/snapchat++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Snapchat/snapchat.plist","images/app_install_page/plist/screenshot/snapchat.png","","","",""];
var app113 = ["Instagram ++","","images/app_install_page/plist/icon/instagram++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Instagram/instagram.plist","images/app_install_page/plist/screenshot/instagram.png","","","",""];
var app114 = ["Instagram ++ Rocket","","images/app_install_page/plist/icon/instagram++.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/3040190.plist","images/app_install_page/plist/screenshot/instagram_gold.png","","","",""];
var app115 = ["Video Downloader","","images/app_install_page/plist/icon/video_downloader.png","itms-services://?action=download-manifest&url=https://prprm.sakura.ne.jp/pl/doda.plist","images/app_install_page/plist/screenshot/video_downloader.png","","","",""];
var app116 = ["Napster ++","","images/app_install_page/plist/icon/napster++.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2894965.plist","images/app_install_page/plist/screenshot/napster1.png","images/app_install_page/plist/screenshot/napster2.png","","",""];
var app117 = ["Pokemon Go ++","","images/app_install_page/plist/icon/bokego++.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2646574.plist","images/app_install_page/plist/screenshot/pokego1.png","","","",""];
var app118 = ["Aero TV ++","","images/app_install_page/plist/icon/nero_tv++.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2754624.plist","images/app_install_page/plist/screenshot/aerotv1.jpg","","","",""];
var app119 = ["EveryCord","","images/app_install_page/plist/icon/everycord.png","itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Tj3rWTiqV3YtaqYb_qz4OknZymn8iiqoXf5Lmin5q0psphm8bb%2Ftitle%2FEveryCordx","images/app_install_page/plist/screenshot/everycodes1.jpg","","","",""];
var app120 = ["Bobby movie","","images/app_install_page/plist/icon/bobbymovies.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/BobbyMovie/bobbyMovie.plist","images/app_install_page/plist/screenshot/bobby_movie.png","","","",""];
var app121 = ["DR. Fone","","images/app_install_page/plist/icon/drfone.png","itms-services:///?action=download-manifest&url=https://drfone.wondershare.com/ios-screen-recorder/manifest.plist%20(itms-services:///?action=download-manifest&url=https://drfone.wondershare.com/ios-screen-recorder/manifest.plist","images/app_install_page/plist/screenshot/dr.fones1.jpg","","","",""];
var app122 = ["Looperverse","","images/app_install_page/plist/icon/looperverse.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2949945.plist","images/app_install_page/plist/screenshot/looperverse.png","","","",""];
var app123 = ["Voice Record pro","","images/app_install_page/plist/icon/voice_record_pro.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/1872321.plist","images/app_install_page/plist/screenshot/voicerecodepros1.jpg","","","",""];
var app124 = ["Screen Recorder","","images/app_install_page/plist/icon/screen_recorder.png","itms-services://?action=download-manifest&url=https://www.haimawan.com/h5plist/gw/mios.haimawam.com:6b111a98-92a2-48c0-a740-8a52aa8d0427/6e97d627-fc62-4eba-8e2e-ffaa9e0e6c4b/0.plist","images/app_install_page/plist/screenshot/voice_record1.png","images/app_install_page/plist/screenshot/voice_record2.png","","",""];
var app125 = ["Pixomatic Photo","","images/app_install_page/plist/icon/pixomatic_photo.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2142538.plist","images/app_install_page/plist/screenshot/pixomatic.png","","","",""];
var app126 = ["Enlight","","images/app_install_page/plist/icon/enlight.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/1573043.plist","images/app_install_page/plist/screenshot/enlight1.png","images/app_install_page/plist/screenshot/enlight2.png","images/app_install_page/plist/screenshot/enlight3.png","",""];
var app127 = ["Notebook","","images/app_install_page/plist/icon/notebook.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/1053503.plist","images/app_install_page/plist/screenshot/notebook1.png","images/app_install_page/plist/screenshot/notebook2.png","","",""];
var app128 = ["FaceTune","","images/app_install_page/plist/icon/facetune.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/696234.plist","images/app_install_page/plist/screenshot/facetune1.png","images/app_install_page/plist/screenshot/facetune2.png","","",""];
var app129 = ["Moje Maker","","images/app_install_page/plist/icon/moje_maker.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2385765.plist","images/app_install_page/plist/screenshot/moji1.png","images/app_install_page/plist/screenshot/moji2.png","","",""];
var app130 = ["Scanner for me","","images/app_install_page/plist/icon/scanner_for_me.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2036440.plist","images/app_install_page/plist/screenshot/scan_for_me1.png","images/app_install_page/plist/screenshot/scan_for_me2.png","","",""];

var app131 = ["Two years, the American","","images/app_install_page/plist/icon/two_years_the_american.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2878269.plist","images/app_install_page/plist/screenshot/twoyofamericans1.jpg","","","",""];
var app132 = ["Hyperburner","","images/app_install_page/plist/icon/hyperburner.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2373871.plist","images/app_install_page/plist/screenshot/hyperburner1.png","images/app_install_page/plist/screenshot/hyperburner2.png","","",""];
var app133 = ["Tempest","","images/app_install_page/plist/icon/pirate_action_rpg.png","itms-services://?action=download-manifest&url=https%3A%2F%2Fios.miekute.info%2Fapp1235%2Fappinstall%2Falltutu.php%3Fipa%3DV3JKYml4aWZQVEhQcG4vMG5OQmpvblRzR0UrQmY2SStpdHlSYmhhY0hueVJ0Mnh1QVVyWlRqc2VLbGFYb0RwVA","images/app_install_page/plist/screenshot/Tempast1.PNG","images/app_install_page/plist/screenshot/Tempast2.PNG","images/app_install_page/plist/screenshot/Tempast3.PNG","",""];
var app134 = ["The Terminal 2","","images/app_install_page/plist/icon/terminal2.png","itms-services://?action=download-manifest&url=https%3A%2F%2Fios.miekute.info%2Fapp1235%2Fappinstall%2Falltutu.php%3Fipa%3DV3JKYml4aWZQVEhQcG4vMG5OQmpvaVZ5TmJXWWs1ODZxSGxoTHoxQ1h2bTBneWZrTE5TQWlLWm5NY2t2WVc1dA","images/app_install_page/plist/screenshot/terminal1.png","images/app_install_page/plist/screenshot/terminal2.png","","",""];
var app135 = ["League of Queens","","images/app_install_page/plist/icon/league_of_queens.png","itms-services://?action=download-manifest&url=https%3A%2F%2Fios.miekute.info%2Fapp1235%2Fappinstall%2Falltutu.php%3Fipa%3DV3JKYml4aWZQVEhQcG4vMG5OQmpvcFl1Nmd4QTgwd2lQY0VUcmZkaENxQnBjdzg0NGMwZWhZRDdDSVY3YWNVTA","images/app_install_page/plist/screenshot/league_of_queens.png","","","",""];
var app136 = ["Hungry Shark","","images/app_install_page/plist/icon/hungry_shark.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2134774.plist","images/app_install_page/plist/screenshot/hungry_shark1.png","images/app_install_page/plist/screenshot/hungry_shark2.png","images/app_install_page/plist/screenshot/hungry_shark3.png","",""];
var app137 = ["Temple Run 2","","images/app_install_page/plist/icon/temple_run.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2873677.plist","images/app_install_page/plist/screenshot/temple_run1.png","images/app_install_page/plist/screenshot/temple_run2.png","images/app_install_page/plist/screenshot/temple_run3.png","",""];
var app138 = ["The Greedy Cave","","images/app_install_page/plist/icon/the_greedy_cave.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2801075.plist","images/app_install_page/plist/screenshot/greedy_cave1.png","images/app_install_page/plist/screenshot/greedy_cave2.png","","",""];
var app139 = ["Sniper","","images/app_install_page/plist/icon/sniper.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2951097.plist","images/app_install_page/plist/screenshot/snipers1.PNG","images/app_install_page/plist/screenshot/snipers2.PNG","images/app_install_page/plist/screenshot/snipers3.PNG","",""];
var app140 = ["Bean Dreams","","images/app_install_page/plist/icon/bean_dreams.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/1443683.plist","images/app_install_page/plist/screenshot/bean_d1.PNG","images/app_install_page/plist/screenshot/bean_d2.PNG","images/app_install_page/plist/screenshot/bean_d3.PNG","",""]; 

var app141 = ["WWE 2K","","images/app_install_page/plist/icon/wwe_2k.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/1642490.plist","images/app_install_page/plist/screenshot/wzks1.PNG","images/app_install_page/plist/screenshot/wzks2.PNG","images/app_install_page/plist/screenshot/wzk3.PNG","images/app_install_page/plist/screenshot/wzk4.PNG","images/app_install_page/plist/screenshot/wzk5.PNG"];
var app142 = ["Spotify++","","images/app_install_page/plist/icon/spotify++.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2722673.plist","images/app_install_page/plist/screenshot/spotify1.png","images/app_install_page/plist/screenshot/spotify2.png","images/app_install_page/plist/screenshot/spotify3.png","",""];
var app143 = ["Jodel++","","images/app_install_page/plist/icon/jodel_icon.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/3137144.plist","images/app_install_page/plist/screenshot/jodelpic1.jpg","","","",""];
var app144 = ["Movie Box","","images/app_install_page/plist/icon/moviebox.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/MovieBox/moviebox.plist","images/app_install_page/plist/screenshot/movie_box1.png","images/app_install_page/plist/screenshot/movie_box2.png","images/app_install_page/plist/screenshot/movie_box3.png","",""];
var app145 = ["SCOthmanAR","","images/app_install_page/plist/icon/scothmanar.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/install/SCOthmanAR/scothmanv1.plist","images/app_install_page/plist/screenshot/scothman.png","","","",""];
var app146 = ["AirShou","","images/app_install_page/plist/icon/airshou.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/AirShou/airshou.plist","images/app_install_page/plist/screenshot/airshou1.png","images/app_install_page/plist/screenshot/airshou2.png","","",""];
var app147 = ["Kodi","","images/app_install_page/plist/icon/kodi.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/CoolPixel/coolpixel.plist","images/app_install_page/plist/screenshot/kody1.png","images/app_install_page/plist/screenshot/kody2.png","","",""];
var app148 = ["Coolpixel","","images/app_install_page/plist/icon/coolpixel.png","itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Tj3rWTiqV3YtaqYb_qz4OknZymn8iiqoXd3cOclqC9mdJhm8bb%2Ftitle%2FCoolPixel","images/app_install_page/plist/screenshot/coolpixel.png","","","",""];
var app149 = ["GBA4iOS","","images/app_install_page/plist/icon/gba4ios.png","itms-services://?action=download-manifest&url=https://www.iinstaller.net/dl/plists2/gba4ios.plist","images/app_install_page/plist/screenshot/gba4.png","","","",""];
var app150 = ["PlayBox","","images/app_install_page/plist/icon/playbox.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/PlayBoxHD/PlayBox.plist","images/app_install_page/plist/screenshot/play_box1.png","images/app_install_page/plist/screenshot/play_box2.png","","",""];

var app151 = ["Delta","","images/app_install_page/plist/icon/delta.png","itms-services://?action=download-manifest&url=https://www.iinstaller.net/dl/plists2/delta.plist","images/app_install_page/plist/screenshot/delta.png","","","",""];
var app152 = ["SoundCloud ++","","images/app_install_page/plist/icon/soundcloud++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/SoundCloud/SoundCloud.plist","images/app_install_page/plist/screenshot/video_downloader.png","","","",""];
var app153 = ["Crunchyroll++","","images/app_install_page/plist/icon/crunchyroll++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Crunchyroll/crunchyroll.plist","images/app_install_page/plist/screenshot/crunchyroll1.png","images/app_install_page/plist/screenshot/crunchyroll2.png","","",""];
var app154 = ["Pandora++","","images/app_install_page/plist/icon/pandora++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Pandora/pandora.plist","images/app_install_page/plist/screenshot/pandora.png","","","",""];
var app155 = ["FilzaJailed","","images/app_install_page/tweaksjb/icon/filza-file-manager.png","itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Tj3rWTiqV3YtaqYb_qz4OknZymn8iiqoXg18Cqh2WupMc,%2Ftitle%2FFilzaEscaped","images/app_install_page/tweaksjb/screenshot/filza-file-manager.png","","","",""];
var app156 = ["Happy Chick","","images/app_install_page/plist/icon/happychick.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/HappyChick/HappyChick.plist","images/app_install_page/plist/screenshot/happy_chick1.png","images/app_install_page/plist/screenshot/happy_chick2.png","","",""];
var app157 = ["Super Mario","","images/app_install_page/plist/icon/super_mario.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/SuperMario/supermario.plist","images/app_install_page/plist/screenshot/mario.png","","","",""];
var app158 = ["R-Play PS4 Remote","","images/app_install_page/plist/icon/r-play.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2979830.plist","images/app_install_page/plist/screenshot/r-play.png","","","",""];
var app159 = ["Djay for iphone","","images/app_install_page/plist/icon/djay.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/827402.plist","images/app_install_page/plist/screenshot/djay.png","","","",""];
var app160 = ["Union","","images/app_install_page/plist/icon/Union.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/1167913.plist","images/app_install_page/plist/screenshot/union.png","images/app_install_page/plist/screenshot/union2.png","","",""];

var app161 = ["Color splach","","images/app_install_page/plist/icon/color.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/198182.plist","images/app_install_page/plist/screenshot/colorSplash.png","","","",""];
var app162 = ["AVplayer","","images/app_install_page/plist/icon/av.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/442979.plist","images/app_install_page/plist/screenshot/avplayer.png","","","",""];
var app163 = ["AdBlock","","images/app_install_page/plist/icon/adblock.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/1127204.plist","images/app_install_page/plist/screenshot/adblock.png","","","",""];
var app164 = ["Gaia GBS","","images/app_install_page/plist/icon/gaiagps.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/367144.plist","images/app_install_page/plist/screenshot/gaia.png","","","",""];
var app165 = ["Gifstory","","images/app_install_page/plist/icon/Gifstory.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/2160747.plist","images/app_install_page/plist/screenshot/gifstory.png","","","",""];
var app166 = ["Tuneln Radio pro","","images/app_install_page/plist/icon/TuneIn.png","itms-services://?action=download-manifest&url=https://tutuapp.com/vn/356037.plist","images/app_install_page/plist/screenshot/tunelnRedio.png","","","",""];

var app167 = ["The Movie DB","","images/app_install_page/plist/icon/themovieDB.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/MovieDB/MovieDB.plist","images/app_install_page/plist/screenshot/moviedb-min.jpg","","","",""];
var app168 = ["Audiobooks HQ","","images/app_install_page/plist/icon/audiobooks.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/audiobooks/Audiobooks.plist","images/app_install_page/plist/screenshot/audiobooks-min.jpg","images/app_install_page/plist/screenshot/audiobooks1-min.jpg","","",""];
var app169 = ["Movie Spirit","","images/app_install_page/plist/icon/moviespirit.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/movie_spirit/MovieSpirit.plist","images/app_install_page/plist/screenshot/moviespinit-min.jpg","images/app_install_page/plist/screenshot/moviespinit1-min.jpg","","",""];
var app170 = ["AirVideo HD","","images/app_install_page/plist/icon/airvedio.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/airvideo_hd/AirVideoHD.plist","images/app_install_page/plist/screenshot/airvideo-min.jpg","","","",""];

var app171 = ["BobbyMusic","","images/app_install_page/plist/icon/bobbymusic.jpg","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/BobbyMusic/bobbyMusicv1.plist","images/app_install_page/plist/screenshot/bobbymusic-min.jpg","","","",""];
var app172 = ["Channels","","images/app_install_page/plist/icon/channels.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Channels/channels.plist","images/app_install_page/plist/screenshot/channels-min.jpg","images/app_install_page/plist/screenshot/channels1-min.jpg","","",""];
var app173 = ["iTransmission","","images/app_install_page/tweaksjb/icon/iTransmission.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/iTransmission/iTransmission.plist","images/app_install_page/tweaksjb/screenshot/iTransmission.png","","","",""];
var app174 = ["HalowTV","","images/app_install_page/plist/icon/halowtv.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/HalowTV/Halowtv.plist","images/app_install_page/plist/screenshot/halowtv-min.jpg","","","",""];
var app175 = ["StreamerTV","","images/app_install_page/plist/icon/streamertv.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/StreamerTV/streamerTV.plist","images/app_install_page/tweaksjb/screenshot/iTransmission.png","","","",""];
var app176 = ["SaveCloud","","images/app_install_page/plist/icon/savecloud.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/savecloud/SaveCloud.plist","images/app_install_page/plist/screenshot/soundcloud-min.jpg","images/app_install_page/plist/screenshot/soundcloude1-min.jpg","","",""];
var app177 = ["BBM3","","images/app_install_page/plist/icon/BBM3.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/BBM3/BBM3.plist","images/app_install_page/plist/screenshot/bbm3-min.jpg","","","",""];
var app178 = ["LINE2","","images/app_install_page/plist/icon/line2.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/line2/LINE2.plist","images/app_install_page/plist/screenshot/line2-min.jpg","","","",""];
var app179 = ["OLDV","","images/app_install_page/plist/icon/oldv.jpg","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/oldv/OLDV.plist","images/app_install_page/plist/screenshot/oldv-min.jpg","images/app_install_page/plist/screenshot/oldv1-min.jpg","","",""];
var app180 = ["Torngat","","images/app_install_page/plist/icon/torngat.jpg","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/torngat/TornGat.plist","images/app_install_page/plist/screenshot/torngat-min.jpg","","","",""];

var app181 = ["Vidiyu","","images/app_install_page/plist/icon/vidiyu.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/vidiyu/Vidiyu.plist","images/app_install_page/plist/screenshot/vidiyu-min.jpg","images/app_install_page/plist/screenshot/vidiyu1-min.jpg","","",""];
var app182 = ["Animoji Studio","","images/app_install_page/plist/icon/animojistudio.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/animoji_studio/AnimojiStudio.plist","images/app_install_page/plist/screenshot/animojistudio-min.jpg","","","",""];
var app183 = ["Automatic Calls","","images/app_install_page/plist/icon/automaticcall.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/automatic_calls/AutomaticCall.plist","images/app_install_page/plist/screenshot/automaticcall-min.jpg","images/app_install_page/plist/screenshot/automaticcall1-min.jpg","","",""];
var app184 = ["SHAREit Pro","","images/app_install_page/plist/icon/shareitpro.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/shareit_pro/SHAREit.plist","images/app_install_page/plist/screenshot/shareit-min.jpg","","","",""];
var app185 = ["VivaVideoPRO","","images/app_install_page/plist/icon/vivavideopro.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/vivavideopro/VivaVideoPRO.plist","images/app_install_page/plist/screenshot/vivavideo-min.jpg","images/app_install_page/plist/screenshot/vivavideo1-min.jpg","","",""];
var app186 = ["Duet Display","","images/app_install_page/plist/icon/duetdisplay.jpg","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/duet_display/DuetDisplay.plist","images/app_install_page/plist/screenshot/duit-min.jpg","","","",""];
var app187 = ["Night Vision","","images/app_install_page/plist/icon/night_vision.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/night_vision/NightVision.plist","images/app_install_page/plist/screenshot/nightvision-min.jpg","","","",""];
var app188 = ["Puffin Browser Pro","","images/app_install_page/plist/icon/puffin-browser.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/puffin_browser/PuffinBrowser.plist","images/app_install_page/plist/screenshot/puffin-min.jpg","","","",""];
var app189 = ["Geekbench 4","","images/app_install_page/plist/icon/geekbench.jpg","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/geekbench4/Geekbench4.plist","images/app_install_page/plist/screenshot/geek-bench-min.jpg","","","",""];
var app190 = ["TeamSpeak","","images/app_install_page/plist/icon/team_speak.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/team_speak3/TeamSpeak3.plist","images/app_install_page/plist/screenshot/teamspeak-min.jpg","images/app_install_page/plist/screenshot/teamspeak1-min.jpg","","",""];

var app191 = ["Network Utility Pro","","images/app_install_page/plist/icon/networkutility.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/network_utility/NetworkUtility.plist","images/app_install_page/plist/screenshot/networkutility-min.png","","","",""];
var app192 = ["AppBox Pro","","images/app_install_page/plist/icon/appbox.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/AppBoxPro/AppBoxPro.plist","images/app_install_page/plist/screenshot/appbox-min.jpg","images/app_install_page/plist/screenshot/appbox1-min.jpg","","",""];
var app193 = ["PDF Reader Pro","","images/app_install_page/plist/icon/PDF-Reader-Pro.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/PDF_Reader_Pro/PDFReader.plist","images/app_install_page/plist/screenshot/pdfreader-min.jpg","","","",""];
var app194 = ["Weather widget","","images/app_install_page/plist/icon/wheatherwid.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Weather_widget/WeatherWidget.plist","images/app_install_page/plist/screenshot/weather-widget-min.jpg","","","",""];
var app195 = ["WebSSH Pro","","images/app_install_page/plist/icon/webssh.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/webssh_pro/WebSSH.plist","images/app_install_page/plist/screenshot/webssh-min.jpg","","","",""];
var app196 = ["IP Tools","","images/app_install_page/plist/icon/IPtools.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/ip_tools/IPTools.plist","images/app_install_page/plist/screenshot/ip-tools-min.jpg","images/app_install_page/plist/screenshot/ip-tools1-min.jpg","","",""];
var app197 = ["Speak & Translate","","images/app_install_page/plist/icon/speak_translate.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/speak_translate/Translator.plist","images/app_install_page/plist/screenshot/speak-translate-min.jpg","images/app_install_page/plist/screenshot/speak-translate1-min.jpg","","",""];
var app198 = ["Gym Hero","","images/app_install_page/plist/icon/gym-hero.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/gym_hero/GymHero.plist","images/app_install_page/plist/screenshot/gymhero-min.jpg","","","",""];
var app199 = ["SetBeat","","images/app_install_page/plist/icon/SetBeat.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Setbeat/seatbeat.plist","images/app_install_page/plist/screenshot/setbeat-min.jpg","","","",""];
var app200 = ["iCleaner Pro","","images/app_install_page/tweaksjb/icon/iCleaner-Pro.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/cleaner/CleanerPro.plist","images/app_install_page/plist/screenshot/icleaner.png","","","",""];

var app201 = ["AirRec","","images/app_install_page/plist/icon/airrec.jpg","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/AirRec/AirRecv1.plist","images/app_install_page/plist/screenshot/airrecord-min.jpg","","","",""];
var app202 = ["Battery Life","","images/app_install_page/plist/icon/BatteryLife.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/BatteryLife/batteryLifev1.plist","images/app_install_page/plist/screenshot/battery-life-min.jpg","","","",""];
var app203 = ["File Browser","","images/app_install_page/plist/icon/filebrowser.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/FileBrowser/fileBrowserv1.plist","images/app_install_page/plist/screenshot/filebrowser-min.jpg","","","",""];
var app204 = ["GBC.emu","","images/app_install_page/plist/icon/gbc-emu.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/GBCemu/GBCemuv1.plist","images/app_install_page/plist/screenshot/gbcemu-min.jpg","","","",""];
var app205 = ["HandJoy","","images/app_install_page/plist/icon/handjoy.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/hand_joy/HandJoy.plist","images/app_install_page/plist/screenshot/handjoy-min.jpg","","","",""];
var app206 = ["HappyCast","","images/app_install_page/plist/icon/happycast.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/HappyCast/happyCastv1.plist","images/app_install_page/plist/screenshot/happycast-min.jpg","","","",""];
var app207 = ["iFoneOS","","images/app_install_page/plist/icon/ifoneos.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/iFoneOS/ifoneosv1.plist","images/app_install_page/plist/screenshot/ifoneos-min.jpg","images/app_install_page/plist/screenshot/ifoneos1-min.jpg","","",""];
var app208 = ["Slick TV","","images/app_install_page/plist/icon/slickTV.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/SlickTV/slicktv.plist","images/app_install_page/plist/screenshot/slicktv-min.jpg","images/app_install_page/plist/screenshot/slicktv1-min.jpg","","",""];
var app209 = ["iTweetDeck","","images/app_install_page/plist/icon/itweetdeck.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/iTweetDeck/iTweetDeck.plist","images/app_install_page/plist/screenshot/itweetdeck-min.jpg","","","",""];
var app210 = ["Movie Box++","","images/app_install_page/plist/icon/moviebox++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/MovieBox/moviebox.plist","images/app_install_page/plist/screenshot/moviebox++-min.jpg","","","",""];

var app211 = ["KikCam++","","images/app_install_page/plist/icon/kikcam.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/KikCam/Kikcam.plist","images/app_install_page/plist/screenshot/kikcam++-min.jpg","","","",""];
var app212 = ["Speedtest++","","images/app_install_page/plist/icon/speedtest.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Speedtest/Speedtest.plist","images/app_install_page/plist/screenshot/speedtest-min.jpg","","","",""];
var app213 = ["Bobby Movie++","","images/app_install_page/plist/icon/BobbyMovie++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/BobbyMovie/bobbymovie.plist","images/app_install_page/plist/screenshot/bobbymovie++-min.jpg","","","",""];
var app214 = ["Bobby Music++","","images/app_install_page/plist/icon/BobbyMusic++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/BobbyMusic/bobbymusic.plist","images/app_install_page/plist/screenshot/bobbymusic++-min.jpg","","","",""];
var app215 = ["Whats app++","","images/app_install_page/plist/icon/whatsapp++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/WhatsApp/whatsapp.plist","images/app_install_page/plist/screenshot/whatsapp++-min.jpg","","","",""];
var app216 = ["musical.ly ++","","images/app_install_page/plist/icon/musically.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/musicly/musicly.plist","images/app_install_page/plist/screenshot/musically-min.jpg","","","",""];
var app217 = ["YouTube Music++","","images/app_install_page/plist/icon/youtube-music.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/YouTubeMusic/YouTubeMusic.plist","images/app_install_page/plist/screenshot/youtube-music++-min.jpg","","","",""];
var app218 = ["PokeGo ++","","images/app_install_page/plist/icon/Pokemon_Go++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/PokeGo/PokeGo.plist","images/app_install_page/plist/screenshot/pokemongo++-min.jpg","images/app_install_page/plist/screenshot/pokego1.png","","",""];
var app219 = ["Spotify ++","","images/app_install_page/plist/icon/spotify++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Spotify/spotify.plist","images/app_install_page/plist/screenshot/spotify++-min.jpg","images/app_install_page/plist/screenshot/spotify1++-min.jpg","","",""];
var app220 = ["BBM++","","images/app_install_page/plist/icon/BBM3.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/BBM/bbm3.plist","images/app_install_page/plist/screenshot/bbm++-min.jpg","images/app_install_page/plist/screenshot/bbm++1-min.jpg","","",""];

var app221 = ["Dezzer++","","images/app_install_page/plist/icon/deezer++.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Deezer/deezer.plist","images/app_install_page/plist/screenshot/dezzer++-min.jpg","images/app_install_page/plist/screenshot/dezzer++1-min.jpg","","",""];
var app222 = ["SleepCycle++","","images/app_install_page/plist/icon/sleepcycle.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/SleepCycle/SleepCycle.plist","images/app_install_page/plist/screenshot/sleepy-cycle-min.jpg","images/app_install_page/plist/screenshot/sleepy-cycle1-min.jpg","images/app_install_page/plist/screenshot/sleepy-cycle2-min.jpg","",""];
var app223 = ["DNS Override++","","images/app_install_page/plist/icon/dns-override.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/DNSOverride/dnsoverride.plist","images/app_install_page/plist/screenshot/dns-overide++-min.jpg","images/app_install_page/plist/screenshot/dns-overide++1-min.jpg","","",""];
var app224 = ["UFC++","","images/app_install_page/plist/icon/UFC.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/plus/UFC/ufcv1.plist","images/app_install_page/plist/screenshot/ufc++-min.jpg","","","",""];
var app225 = ["Vine++","","images/app_install_page/plist/icon/vine.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Vine/vine.plist","images/app_install_page/plist/screenshot/vine++-min.jpg","images/app_install_page/plist/screenshot/vine++1-min.jpg","","",""];
var app226 = ["Cercube 4++","","images/app_install_page/plist/icon/cercube.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/Cercube4/cercube4.plist","images/app_install_page/plist/screenshot/cercube++-min.jpg","","","",""];
var app227 = ["DownCloud++","","images/app_install_page/plist/icon/downcloud.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/DownCloud/DownCloud.plist","images/app_install_page/plist/screenshot/downcloud++-min.jpg","images/app_install_page/plist/screenshot/downcloud++1-min.jpg","","",""];
var app228 = ["ProTube++","","images/app_install_page/plist/icon/Protube.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/plus/ProTube/ProTube.plist","images/app_install_page/plist/screenshot/protube++-min.jpg","","","",""];
var app229 = ["Subway Surfers","","images/app_install_page/plist/icon/Subway-Surfers.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/SubwaySurfers/subwaysurfers.plist","images/app_install_page/plist/screenshot/subwaysurface-min.jpg","images/app_install_page/plist/screenshot/subwaysurface1-min.jpg","","",""];
var app230 = ["Clash of Kings","","images/app_install_page/plist/icon/clash_of_kings.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/ClashofKings/ClashofKings.plist","images/app_install_page/plist/screenshot/cashofkings-min.jpg","images/app_install_page/plist/screenshot/cashofkings1-min.jpg","images/app_install_page/plist/screenshot/cashofkings2-min.jpg","",""];

var app231 = ["Pokemonidex","","images/app_install_page/plist/icon/pokemonidex.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Pokemonidex/pokemonidex.plist","images/app_install_page/plist/screenshot/pokemonidex-min.jpg","images/app_install_page/plist/screenshot/Pokemonidex1-min.jpg","","",""];
var app232 = ["Earn to Die 2","","images/app_install_page/plist/icon/earm-to-die.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/EarmToDie/earmToDie.plist","images/app_install_page/plist/screenshot/earn-to-die-min.jpg","images/app_install_page/plist/screenshot/earn-to-die1-min.jpg","","",""];
var app233 = ["Bike Race Pro","","images/app_install_page/plist/icon/bike_race_pro.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/BikeRace/bikerace.plist","images/app_install_page/plist/screenshot/bike-racepro-min.jpg","images/app_install_page/plist/screenshot/bike-racepro1-min.jpg","images/app_install_page/plist/screenshot/bike-racepro2-min.jpg","",""];
var app234 = ["Traffic Rider hack","","images/app_install_page/plist/icon/traffic-rider.png","itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3o5fVZu0q9Rhqbvb3sReiaayY8ejosmp6LZfVmd4Y5dnYYexnYlnVWymmJ5olYeun7Vih5l5mZdpZIjbp4hpWGWupMc,%2Ftitle%2FTraffic%2520Rider%2520hack","images/app_install_page/plist/screenshot/traffic-riderhack-min.jpg","","","",""];
var app235 = ["Geometry Dash","","images/app_install_page/plist/icon/geometry-dash.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/GeometryDash/geometryDashgv1.plist","images/app_install_page/plist/screenshot/geometry-min.jpg","images/app_install_page/plist/screenshot/geometry1-min.jpg","","",""];
var app236 = ["Getting Over It","","images/app_install_page/plist/icon/gettingoverlt.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/GettingOverIt/gettingOverItgv1.plist","images/app_install_page/plist/screenshot/getting-overit-min.jpg","images/app_install_page/plist/screenshot/getting-overit1-min.jpg","images/app_install_page/plist/screenshot/getting-overit2-min.jpg","",""];
var app237 = ["LIMBO","","images/app_install_page/plist/icon/LIMBO.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/LIMBO/limbogv1.plist","images/app_install_page/plist/screenshot/limbo-min.jpg","images/app_install_page/plist/screenshot/limbo1-min.jpg","","",""];
var app238 = ["Drift Max","","images/app_install_page/plist/icon/griftmax.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/DriftMax/DriftMaxgv1.plist","images/app_install_page/plist/screenshot/driftmax-min.jpg","","","",""];
var app239 = ["Kick The Buddy","","images/app_install_page/plist/icon/KickTheBuddy.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/KickTheBuddy/KickThebuddygv1.plist","images/app_install_page/plist/screenshot/kickthebuddy-min.jpg","images/app_install_page/plist/screenshot/kickthebuddy1-min.jpg","","",""];
var app240 = ["Parkour Flight","","images/app_install_page/plist/icon/parkour-flight.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/ParkourFlight/parkourflightgv1.plist","images/app_install_page/plist/screenshot/parkerflight-min.jpg","images/app_install_page/plist/screenshot/parkerflight1-min.jpg","","",""];

var app241 = ["BADLAND 2","","images/app_install_page/plist/icon/badland2.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/BADLAND2/badland2gv1.plist","images/app_install_page/plist/screenshot/badland2-min.jpg","images/app_install_page/plist/screenshot/badland2i-min.jpg","","",""];
var app242 = ["Dragon Hills2","","images/app_install_page/plist/icon/dragon-hills.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/DragonHills2/DragonHills2.plist","images/app_install_page/plist/screenshot/draganhills-min.jpg","images/app_install_page/plist/screenshot/dragonhills1-min.jpg","","",""];
var app243 = ["Neon Drive","","images/app_install_page/plist/icon/neon-drive.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/NeonDrive/neonDrivegv1.plist","images/app_install_page/plist/screenshot/neondrive-min.jpg","images/app_install_page/plist/screenshot/neondrive1-min.jpg","","",""];
var app244 = ["Hockey Classic","","images/app_install_page/plist/icon/hockey-classic.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/HockeyClassic/HockeyClassicgv1.plist","images/app_install_page/plist/screenshot/hockyclassic-min.jpg","images/app_install_page/plist/screenshot/hockyclassic1-min.jpg","","",""];
var app245 = ["Plants vs. Zombies 2","","images/app_install_page/plist/icon/Plants-Vs-Zombie.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/PlantsZombies2/PlantsZombies2.plist","images/app_install_page/plist/screenshot/plantsvs.zombies2-min.jpg","images/app_install_page/plist/screenshot/plantsvs.zombies2i-min.jpg","","",""];
var app246 = ["Brawl Stars Hack","","images/app_install_page/plist/icon/Brawl-Stars.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/BrawlStars/BrawlStarsgv1.plist","images/app_install_page/tweaksjb/screenshot/iTransmission.png","","","",""];
var app247 = ["PAKO 2","","images/app_install_page/plist/icon/pako2.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/PAKO2/PAKO2gv1.plist","images/app_install_page/plist/screenshot/pako2-min.jpg","images/app_install_page/plist/screenshot/pako21-min.jpg","","",""];
var app248 = ["Motorsport Manager","","images/app_install_page/plist/icon/motosport-manager.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/MotorsportManager/Motorsportgv1.plist","images/app_install_page/plist/screenshot/motorsportmanager-min.jpg","","","",""];
var app249 = ["Papa's Burgeria ToGo","","images/app_install_page/plist/icon/papas-burgeria.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/PapasBurgeriaToGo/PapasBurgeriagv1.plist","images/app_install_page/plist/screenshot/papasburger-min.jpg","images/app_install_page/plist/screenshot/papasburger1-min.jpg","","",""];
var app250 = ["Can Knockdown 2","","images/app_install_page/plist/icon/can-knockdown2.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/CanKnockdown2/CanKnockdown2gv1.plist","images/app_install_page/plist/screenshot/canknockdown2-min.jpg","","","",""];

var app251 = ["Pocket Build","","images/app_install_page/plist/icon/pocket-build.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/PocketBuild/PocketBuildgv1.plist","images/app_install_page/plist/screenshot/poketbuild-min.jpg","images/app_install_page/plist/screenshot/poketbuild1-min.jpg","","",""];
var app252 = ["Iron Marines","","images/app_install_page/plist/icon/iron-marines.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/games/IronMarines/IronMarinesgv1.plist","images/app_install_page/plist/screenshot/ironmarines1-min.jpg","","","",""];
var app253 = ["GC4iOS","","images/app_install_page/plist/icon/GC4iOS1.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/GC4iOS/GC4iOS.plist","images/app_install_page/plist/screenshot/gc4ios-min.jpg","","","",""];
var app254 = ["2600.emu","","images/app_install_page/plist/icon/2600emu.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/2600emu/2600emu.plist","images/app_install_page/plist/screenshot/2600emu-min.jpg","","","",""];
var app255 = ["C64.emu","","images/app_install_page/plist/icon/c64emu.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/C64emu/C64emu.plist","images/app_install_page/plist/screenshot/c64emu-min.jpg","","","",""];
var app256 = ["Gearboy","","images/app_install_page/plist/icon/gearboy.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Gearboy/gearboy.plist","images/app_install_page/plist/screenshot/gearboy-min.jpg","","","",""];
var app257 = ["GearSystem","","images/app_install_page/plist/icon/gearsystem.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Gearsystem/gearsystem.plist","images/app_install_page/plist/screenshot/gearsystem-min.jpg","","","",""];
var app258 = ["iDos","","images/app_install_page/plist/icon/idos.png","itms-services://?action=download-manifest&url=https://www.xn--49s43ec10b3on.com/files/anzhuang/new/iDos2/iDos2v1.plist","images/app_install_page/plist/screenshot/idos-min.jpg","","","",""];
var app259 = ["iNDS","","images/app_install_page/plist/icon/inds.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/iNDS/iNDS.plist","images/app_install_page/plist/screenshot/inds-min.jpg","images/app_install_page/plist/screenshot/inds1-min.jpg","","",""];
var app260 = ["iSSB","","images/app_install_page/plist/icon/issb.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/iSSB/issb.plist","images/app_install_page/plist/screenshot/issb-min.jpg","","","",""];

var app261 = ["NESemu","","images/app_install_page/plist/icon/NESemu.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/NES_emu/NESemu.plist","images/app_install_page/plist/screenshot/NESemu-min.jpg","","","",""];
var app262 = ["Nestopia","","images/app_install_page/plist/icon/nestopia.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Nestopia/nestopia.plist","images/app_install_page/plist/screenshot/nestophia-min.jpg","","","",""];
var app263 = ["Play!","","images/app_install_page/plist/icon/play.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Play/play.plist","images/app_install_page/plist/screenshot/play-min.jpg","","","",""];
var app264 = ["NDS4iOS","","images/app_install_page/plist/icon/NDS4iOS.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/nds4ios/nds4ios.plist","images/app_install_page/plist/screenshot/nds4ios1-min.jpg","images/app_install_page/plist/screenshot/nds4ios-min.jpg","","",""];
var app265 = ["Firebird Emu","","images/app_install_page/plist/icon/firebird_emu_64bit.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/FirebirdEmu/FirebirdEmu.plist","images/app_install_page/plist/screenshot/firebirdemu-min.jpg","","","",""];
var app266 = ["GBA.emu","","images/app_install_page/plist/icon/gba_emu.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/GBAemu/GBAemu.plist","images/app_install_page/plist/screenshot/gbaemu-min.jpg","","","",""];
var app267 = ["MAME4iOS","","images/app_install_page/plist/icon/mame4ios.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Mame4iOS/MAME4iOS.plist","images/app_install_page/plist/screenshot/mame4ios-min.jpg","","","",""];
var app268 = ["MD.emu","","images/app_install_page/plist/icon/md_emu.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/MDemu/MDemu.plist","images/app_install_page/plist/screenshot/mdemu-min.jpg","","","",""];
var app269 = ["Provenance","","images/app_install_page/plist/icon/provenance.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Provenance/provenance.plist","images/app_install_page/plist/screenshot/provenance-min.jpg","","","",""];
var app270 = ["Snes9x EX+","","images/app_install_page/plist/icon/snes9x.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/Snes9x/Snes9xEX.plist","images/app_install_page/plist/screenshot/snex9x-min.jpg","","","",""];

var app271 = ["Movie HD","","images/app_install_page/plist/icon/moviehd.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/MovieHD/moviehd.plist","images/app_install_page/plist/screenshot/moviehd-min.jpg","","","",""];
var app272 = ["ToonsNow","","images/app_install_page/plist/icon/toonsnow.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/ToonsNow/toonsnow.plist","images/app_install_page/plist/screenshot/toonsnow-min.jpg","","","",""];
var app273 = ["123 Movies","","images/app_install_page/plist/icon/123movies.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/123Movies/123movies.plist","images/app_install_page/plist/screenshot/123movies-min.jpg","","","",""];
var app274 = ["ClassicPlayer","","images/app_install_page/plist/icon/cp.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/ClassicPlayer/classicplayer.plist","images/app_install_page/plist/screenshot/classicplayer-min.jpg","","","",""];
var app275 = ["Music Pocket","","images/app_install_page/plist/icon/musicpocket.png","itms-services://?action=download-manifest&url=https://xn--49s43ec10b3on.com/files/anzhuang/updates/MusicPocket/musicpocket.plist","images/app_install_page/plist/screenshot/musicpoket-min.jpg","images/app_install_page/plist/screenshot/musicpoket1-min.jpg","","",""];
var app276 = ["AppValley","","images/app_install_page/plist/icon/appvalley.png","itms-services://?action=download-manifest&url=https://app.appvalley.vip/plists/1/install.plist","images/app_install_page/plist/screenshot/appvally-min.jpg","images/app_install_page/plist/screenshot/appvally1-min.jpg","","",""];
var app277 = ["Panda Helper","","images/app_install_page/plist/icon/pandahelper.png","itms-services://?action=download-manifest&url=https://tbsq.tongbu.com/plist/kkzs/20181013/1257_sign_iPhone_v1.0.7_120059.plist","images/app_install_page/tweaksjb/screenshot/pandahelper.jpg","","","",""];



/*================ +++++ ================ */
/*=========== Shortcuts Tweaks ========== */
/*================ +++++ ================ */
var app278 = ["Battery Mode","","images/app_install_page/shortcut_tweaks/icon/battery_mode.png","https://www.icloud.com/shortcuts/7f355e299c3b46b98dd408622601338b","","","","",""];
var app279 = ["Super Low Power MODE","","images/app_install_page/shortcut_tweaks/icon/superLPM.png","https://www.icloud.com/shortcuts/05af15364f4d4df58bca0ce954a08197","","","","",""];
var app280 = ["iToggle","","images/app_install_page/shortcut_tweaks/icon/iToggle.png","https://www.icloud.com/shortcuts/5c40568e762a4f8988e3c092da6476a3","","","","",""];
var app281 = ["Quick Controls EN","","images/app_install_page/shortcut_tweaks/icon/QuickControlsEN.png","https://www.icloud.com/shortcuts/6744e7430d53425997fb8f0f489d14e9","","","","",""];
var app282 = ["Change Font","","images/app_install_page/shortcut_tweaks/icon/ChangeFont.png","https://www.icloud.com/shortcuts/603e8392d77d4b7d816b164e000b5681","","","","",""];
var app283 = ["Image Resizer","","images/app_install_page/shortcut_tweaks/icon/ImageResizer.png","https://www.icloud.com/shortcuts/9711f0132d554e51877cd4c8a3fc9f44","","","","",""];
var app284 = ["Water Eject","","images/app_install_page/shortcut_tweaks/icon/WaterEject.png","https://www.icloud.com/shortcuts/f6ba2a84f2ae4fa9a28e3987f80aab7e","","","","",""];
var app285 = ["Convert Burst To GIF","","images/app_install_page/shortcut_tweaks/icon/ConvertBurstToGIF.png","https://www.icloud.com/shortcuts/eb30a71b88b4498185e8071f5a440fd3","","","","",""];
var app286 = ["Reverse Image Search","","images/app_install_page/shortcut_tweaks/icon/ReverseImageSearch.png","https://www.icloud.com/shortcuts/0ae0e5b57a674191be886507f7519268","","","","",""];
var app287 = ["Photo Toolbox","","images/app_install_page/shortcut_tweaks/icon/PhotoToolbox.png","https://www.icloud.com/shortcuts/702f318c69324c999c6fbd21123b3493","","","","",""];
var app288 = ["Combine Screenshots V","","images/app_install_page/shortcut_tweaks/icon/CombineScreenshotsV.png","https://www.icloud.com/shortcuts/dde0882dc935434dacad69d69c00923f","","","","",""];
var app289 = ["Text Effects","","images/app_install_page/shortcut_tweaks/icon/TextEffects.png","https://www.icloud.com/shortcuts/c83ca12fd53f4e54b3337b2f06d28cd1","","","","",""];
var app290 = ["Get Lyrics","","images/app_install_page/shortcut_tweaks/icon/GetLyrics.png","https://www.icloud.com/shortcuts/0515d63c552444b4b5932935d4fa3ce7","","","","",""];
var app291 = ["Date Calculator","","images/app_install_page/shortcut_tweaks/icon/DateCalculator.png","https://www.icloud.com/shortcuts/362e84f244284ce99837fbe565b7a4dc","","","","",""];
var app292 = ["Alarms w/ Intervals","","images/app_install_page/shortcut_tweaks/icon/AlarmsIntervals.png","https://www.icloud.com/shortcuts/b2b3c985848941c2a442522ed2c54e46","","","","",""];
var app293 = ["Share Wi-Fi","","images/app_install_page/shortcut_tweaks/icon/ShareWi-Fi.png","https://www.icloud.com/shortcuts/e085f9472e754b0da253050fa101dfff","","","","",""];
var app294 = ["Picture To PDF","","images/app_install_page/shortcut_tweaks/icon/PictureToPDF.png","https://www.icloud.com/shortcuts/0fe4a574f104421c8251e8b21af24b0c","","","","",""];
var app295 = ["Merge pdf","","images/app_install_page/shortcut_tweaks/icon/Mergepdf.png","https://www.icloud.com/shortcuts/79b0d1677f9b4b50a21cfdbefba8c64e","","","","",""];
var app296 = ["Send delayed text","","images/app_install_page/shortcut_tweaks/icon/Senddelayedtext.png","https://www.icloud.com/shortcuts/b2bc74681e61455e9e8f6fe60c6ce351","","","","",""];
var app297 = ["IP Address","","images/app_install_page/shortcut_tweaks/icon/IPAddress.png","https://www.icloud.com/shortcuts/ec0b641aa2064653850ec353905a49ce","","","","",""];
var app298 = ["Tip Calculator","","images/app_install_page/shortcut_tweaks/icon/TipCalculator.png","https://www.icloud.com/shortcuts/0425d77e29de4428b7c811f9dd1705da","","","","",""];
var app299 = ["Phones Repair Shops","","images/app_install_page/shortcut_tweaks/icon/PhonesRepairShops.png","https://www.icloud.com/shortcuts/2810861a901d4252aa7dc502d360731d","","","","",""];
var app300 = ["Flashing Torch","","images/app_install_page/shortcut_tweaks/icon/FlashingTorch.png","https://www.icloud.com/shortcuts/f1a1741a819543119ebcc32b0940253c","","","","",""];


/* ==== ++++++++++++++++++++++++++++==== */
/* ==== Cydia tweaks for error pages==== */
/* ==== ++++++++++++++++++++++++++++==== */

// ================================ Don't Use this range for variable (app330- app403 )===================

//Array structure
//var appverialble = ["AppName", "AppVersion", "AppIconAddress", "AppConfigURL", "AppScreeshot1", "AppScreenshot2", "AppScreenshot3", "AppScreenshot4", "AppScreenshot5"];
//var app001 = ["","","","","","","","",""];

var app330 = ["Action Menu","","images/app_install_page/tweaksjb/icon/action_menu.png","","images/app_install_page/tweaksjb/screenshot/action-menu.png","","","",""];
var app331 = ["Activator","","images/app_install_page/tweaksjb/icon/activator.png","","images/app_install_page/tweaksjb/screenshot/activator.png","","","",""];
var app332 = ["AdvancedSettings8","","images/app_install_page/tweaksjb/icon/advanced-settings8.png","","images/app_install_page/tweaksjb/screenshot/advanced-settings8.png","","","",""];
var app333 = ["Alkaline","","images/app_install_page/tweaksjb/icon/alkaline.png","","images/app_install_page/tweaksjb/screenshot/alkaline.png","","","",""];
var app334 = ["AutoBrightness","","images/app_install_page/tweaksjb/icon/auto-brightness.png","","images/app_install_page/tweaksjb/screenshot/auto-brightness.png","","","",""];
var app335 = ["Barrel","","images/app_install_page/tweaksjb/icon/barrel.png","","images/app_install_page/tweaksjb/screenshot/barrel.png","","","",""];
var app336 = ["Bars","","images/app_install_page/tweaksjb/icon/bars.png","","images/app_install_page/tweaksjb/screenshot/bars.png","","","",""];
var app337 = ["BatteryLife","","images/app_install_page/tweaksjb/icon/batterylife.png","","images/app_install_page/tweaksjb/screenshot/battery-life.png","","","",""];
var app338 = ["BatteryPeek","","images/app_install_page/tweaksjb/icon/battery-peek.png","","images/app_install_page/tweaksjb/screenshot/battery-peek.png","","","",""];
var app339 = ["betterFiveIconDock","","images/app_install_page/tweaksjb/icon/better-fiveIcon-dock.png","","images/app_install_page/tweaksjb/screenshot/better-fiveIcon-dock.png","","","",""];
var app340 = ["BioProtect","","images/app_install_page/tweaksjb/icon/bio-protect.png","","images/app_install_page/tweaksjb/screenshot/bio-protect.png","","","",""];

var app341 = ["BounceNotify8","","images/app_install_page/tweaksjb/icon/bounce-notify8.png","","images/app_install_page/tweaksjb/screenshot/bounce-notify8.png","","","",""];
var app342 = ["CallBar","","images/app_install_page/tweaksjb/icon/callbar.png","","images/app_install_page/tweaksjb/screenshot/callbar.png","","","",""];
var app343 = ["CCLowPower","","images/app_install_page/tweaksjb/icon/CCLowPower.png","","images/app_install_page/tweaksjb/screenshot/CCLowPower.png","","","",""];
var app344 = ["Change 4G to LTE","","images/app_install_page/tweaksjb/icon/change-4G-to-LTE.png","","images/app_install_page/tweaksjb/screenshot/change-4G-top-LTE.png","","","",""];
var app345 = ["ClassicDock","","images/app_install_page/tweaksjb/icon/classic-dock.png","","images/app_install_page/tweaksjb/screenshot/classic-dock.png","","","",""];
var app346 = ["ColorBadges","","images/app_install_page/tweaksjb/icon/color-badges.png","","images/app_install_page/tweaksjb/screenshot/color-badges.png","","","",""];
var app347 = ["CyDelete8","","images/app_install_page/tweaksjb/icon/cy-delete8.png","","images/app_install_page/tweaksjb/screenshot/cy-delete8.png","","","",""];
var app348 = ["Cylinder","","images/app_install_page/tweaksjb/icon/cylinder.png","","images/app_install_page/tweaksjb/screenshot/cylinder.png","","","",""];
var app349 = ["Date in Statusbar","","images/app_install_page/tweaksjb/icon/date-in-statusbar.png","","images/app_install_page/tweaksjb/screenshot/date-in-statusbar.png","","","",""];
var app350 = ["DeleteForever","","images/app_install_page/tweaksjb/icon/delete-forever.png","","images/app_install_page/tweaksjb/screenshot/delete-forever.png","","","",""];

var app351 = ["DetailedBatteryUsage","","images/app_install_page/tweaksjb/icon/detailed-battery-usage.png","","images/app_install_page/tweaksjb/screenshot/detailed-battery-usage.png","","","",""];
var app352 = ["Disk Pie","","images/app_install_page/tweaksjb/icon/disk-pie.png","","images/app_install_page/tweaksjb/screenshot/disk-pie.png","","","",""];
var app353 = ["Emoji10","","images/app_install_page/tweaksjb/icon/emoji-port(ios-10).png","","images/app_install_page/tweaksjb/screenshot/emoji-port(ios-10).png","","","",""];
var app354 = ["f.lux","","images/app_install_page/tweaksjb/icon/f.lux.png","","images/app_install_page/tweaksjb/screenshot/f.lux.png","","","",""];
var app355 = ["Xen HTML","","images/app_install_page/tweaksjb/icon/Xen.png","","images/app_install_page/tweaksjb/screenshot/xenhtml-min.JPG","images/app_install_page/tweaksjb/screenshot/xenhtml1-min.JPG","","",""];
var app356 = ["Flex 3","","images/app_install_page/tweaksjb/icon/flex-3.png","","images/app_install_page/tweaksjb/screenshot/flex-3.png","","","",""];
var app357 = ["FlipControlCenter","","images/app_install_page/tweaksjb/icon/flip-control-center.png","","images/app_install_page/tweaksjb/screenshot/flip-control-center.png","","","",""];
var app358 = ["HideLabels10","","images/app_install_page/tweaksjb/icon/hide-labels-10.png","","images/app_install_page/tweaksjb/screenshot/hide-label-10.png","","","",""];
var app359 = ["HideSettingsSearch","","images/app_install_page/tweaksjb/icon/hide-settings-search.png","","images/app_install_page/tweaksjb/screenshot/hide-settings-search.png","","","",""];
var app560 = ["Priority Hub","","images/app_install_page/tweaksjb/icon/icon.png","","images/app_install_page/tweaksjb/screenshot/priorityhub-min.JPG","images/app_install_page/tweaksjb/screenshot/priorityhun1-min.JPG","","",""];


var app361 = ["Icon Renamer","","images/app_install_page/tweaksjb/icon/icon-renamer.png","","images/app_install_page/tweaksjb/screenshot/icon-renamer.png","","","",""];
var app362 = ["IconSupport","","images/app_install_page/tweaksjb/icon/icon-support.png","","images/app_install_page/tweaksjb/screenshot/icon-support.png","","","",""];
var app363 = ["iFile","","images/app_install_page/tweaksjb/icon/iFile.png","","images/app_install_page/tweaksjb/screenshot/iFile.png","","","",""];
var app364 = ["GuestMode 2","","images/app_install_page/tweaksjb/icon/Guestmode2.png","","images/app_install_page/tweaksjb/screenshot/guestmode-min.JPG","images/app_install_page/tweaksjb/screenshot/guestmode1.JPG","","",""];
var app365 = ["LocationFaker9","","images/app_install_page/tweaksjb/icon/location-faker9.png","","images/app_install_page/tweaksjb/screenshot/location-faker9.png","","","",""];
var app366 = ["Minimal HUD","","images/app_install_page/tweaksjb/icon/minimal-HUD.png","","images/app_install_page/tweaksjb/screenshot/minimal-HUD.png","","","",""];
var app367 = ["MTerminal","","images/app_install_page/tweaksjb/icon/mTerminal.png","","images/app_install_page/tweaksjb/screenshot/mTerminal.png","","","",""];
var app368 = ["MultiAction","","images/app_install_page/tweaksjb/icon/multi-action.png","","images/app_install_page/tweaksjb/screenshot/multi-action.png","","","",""];
var app369 = ["MultiIconMover +","","images/app_install_page/tweaksjb/icon/multiIcon-mover+.png","","images/app_install_page/tweaksjb/screenshot/multiIcon-mover+.png","","","",""];
var app370 = ["NetworkList","","images/app_install_page/tweaksjb/icon/network-list.png","","images/app_install_page/tweaksjb/screenshot/network-list.png","","","",""];


var app371 = ["NoBlur","","images/app_install_page/tweaksjb/icon/no-blur.png","","images/app_install_page/tweaksjb/screenshot/no-blur.png","","","",""];
var app372 = ["NoCarrier","","images/app_install_page/tweaksjb/icon/no-carrier.png","","images/app_install_page/tweaksjb/screenshot/no-carrier.png","","","",""];
var app373 = ["NoMotion","","images/app_install_page/tweaksjb/icon/no-motion.png","","images/app_install_page/tweaksjb/screenshot/no-motion.png","","","",""];
var app374 = ["NoSlowAnimations","","images/app_install_page/tweaksjb/icon/no-slow-animations.png","","images/app_install_page/tweaksjb/screenshot/no-slow-animations.png","","","",""];
var app375 = ["NoVolumeHUD","","images/app_install_page/tweaksjb/icon/no-volume-HUD.png","","images/app_install_page/tweaksjb/screenshot/no-volume-HUD.png","","","",""];
var app376 = ["PowerDown","","images/app_install_page/tweaksjb/icon/power-down.png","","images/app_install_page/tweaksjb/screenshot/power-down.png","","","",""];
var app377 = ["PreferenceLoader","","images/app_install_page/tweaksjb/icon/preference-loader.png","","images/app_install_page/tweaksjb/screenshot/preference-loader.png","","","",""];
var app378 = ["PressUnlock","","images/app_install_page/tweaksjb/icon/press-unlock.png","","images/app_install_page/tweaksjb/screenshot/press-unlock.png","","","",""];
var app379 = ["QuickSwipe","","images/app_install_page/tweaksjb/icon/quick-swipe.png","","images/app_install_page/tweaksjb/screenshot/quick-swipe.png","","","",""];
var app380 = ["SprintBoard","","images/app_install_page/tweaksjb/icon/sprint-board.png","","images/app_install_page/tweaksjb/screenshot/sprint-board.png","","","",""];

var app381 = ["TinyPlayer Pro","","images/app_install_page/tweaksjb/icon/tiny-player-pro.png","","images/app_install_page/tweaksjb/screenshot/tiny-player-pro.png","","","",""];
var app382 = ["TransparentDock","","images/app_install_page/tweaksjb/icon/transparent-dock.png","","images/app_install_page/tweaksjb/screenshot/transparent-dock.png","","","",""];
var app383 = ["Unicode Faces","","images/app_install_page/tweaksjb/icon/unicode-faces.png","","images/app_install_page/tweaksjb/screenshot/unicode-faces.png","","","",""];
var app384 = ["UnBold","","images/app_install_page/tweaksjb/icon/un-bold.png","","images/app_install_page/tweaksjb/screenshot/un-bold.png","","","",""];
var app385 = ["WinterBoard","","images/app_install_page/tweaksjb/icon/winter-board.png","","images/app_install_page/tweaksjb/screenshot/winter-board.png","","","",""];
var app386 = ["Wifi Passwords","","images/app_install_page/tweaksjb/icon/wifi-passwords.png","","images/app_install_page/tweaksjb/screenshot/wifi-passwords.png","","","",""];
var app387 = ["Nougat","","images/app_install_page/tweaksjb/icon/Nougat.png","","images/app_install_page/tweaksjb/screenshot/nougat-min.JPG","images/app_install_page/tweaksjb/screenshot/nougat1-min.JPG","","",""];
var app388 = ["Notchfication","","images/app_install_page/tweaksjb/icon/Notchfication.png","","images/app_install_page/tweaksjb/screenshot/notchification-min.JPG","images/app_install_page/tweaksjb/screenshot/notchfication1-min.JPG","images/app_install_page/tweaksjb/screenshot/notchfication2-min.JPG","",""];
var app389 = ["FloatingDock","","images/app_install_page/tweaksjb/icon/FloatingDock.png","","images/app_install_page/tweaksjb/screenshot/floating-min.JPG","images/app_install_page/tweaksjb/screenshot/floatingdock-min.JPG","images/app_install_page/tweaksjb/screenshot/floatingdock1-min.JPG","",""];
var app390 = ["FiveIconDockXL","","images/app_install_page/tweaksjb/icon/icon.png","","images/app_install_page/tweaksjb/screenshot/fiveicondock-min.JPG","","","",""];

var app391 = ["Home Gesture","","images/app_install_page/tweaksjb/icon/HomeGesture.png","","images/app_install_page/tweaksjb/screenshot/homegusture-min.JPG","images/app_install_page/tweaksjb/screenshot/homegusture1-min.JPG","","",""];
var app392 = ["Onix","","images/app_install_page/tweaksjb/icon/themes.png","","images/app_install_page/tweaksjb/screenshot/onix-min.jpg","images/app_install_page/tweaksjb/screenshot/onix1-min.jpg","","",""];
var app393 = ["Akeda","","images/app_install_page/tweaksjb/icon/themes.png","","images/app_install_page/tweaksjb/screenshot/akeda-min.JPG","images/app_install_page/tweaksjb/screenshot/akeda1-min.JPG","","",""];
var app394 = ["Eclipse X","","images/app_install_page/tweaksjb/icon/EclipseX.png","","images/app_install_page/tweaksjb/screenshot/eclipx-min.JPG","images/app_install_page/tweaksjb/screenshot/eclipx1-min.JPG","images/app_install_page/tweaksjb/screenshot/eclipx2-min.JPG","images/app_install_page/tweaksjb/screenshot/eclipx3-min.JPG",""];
var app395 = ["BytaFont 3","","images/app_install_page/tweaksjb/icon/BytaFont3.png","","images/app_install_page/tweaksjb/screenshot/bytafont-min.JPG","","","",""];
var app396 = ["Zeppelin","","images/app_install_page/tweaksjb/icon/Zeppelin.png","","images/app_install_page/tweaksjb/screenshot/zeppelin-min.JPG","","","",""];
var app397 = ["SmallSiri","","images/app_install_page/tweaksjb/icon/SmallSiri.png","","images/app_install_page/tweaksjb/screenshot/smallsiri-min.JPG","","","",""];
var app398 = ["ChromaHomeBarX","","images/app_install_page/tweaksjb/icon/ChromaHomeBarX.png","","images/app_install_page/tweaksjb/screenshot/chromahomebarX-min.jpg","images/app_install_page/tweaksjb/screenshot/chromahomebarX1-min.jpg","images/app_install_page/tweaksjb/screenshot/chromahomebarX2-min.jpg","",""];
var app399 = ["SpinXI","","images/app_install_page/tweaksjb/icon/SpinXl.png","","images/app_install_page/tweaksjb/screenshot/spinxi-min.JPG","images/app_install_page/tweaksjb/screenshot/spinxi1-min.JPG","","",""];
var app400 = ["HUD Customizer","","images/app_install_page/tweaksjb/icon/HUDCustomizerm.png","","images/app_install_page/tweaksjb/screenshot/hubcustomizer-min.JPG","images/app_install_page/tweaksjb/screenshot/hubcustomizer1-min.JPG","","",""];
var app401 = ["CrackTool 3","","images/app_install_page/tweaksjb/icon/CrackTool3.png","","images/app_install_page/tweaksjb/screenshot/cracktool-min.JPG","images/app_install_page/tweaksjb/screenshot/cracktool1-min.JPG","","",""];
var app402 = ["PokeCall","","images/app_install_page/tweaksjb/icon/PokeCall.png","","images/app_install_page/tweaksjb/screenshot/pokecall-min.JPG","images/app_install_page/tweaksjb/screenshot/pokecall1-min.JPG","","",""];
var app403 = ["CallbarX","","images/app_install_page/tweaksjb/icon/CallbarX.png","","images/app_install_page/tweaksjb/screenshot/callbarx-min.JPG","images/app_install_page/tweaksjb/screenshot/callbarx1-min.JPG","images/app_install_page/tweaksjb/screenshot/callbarx2-min.JPG","",""];




















































