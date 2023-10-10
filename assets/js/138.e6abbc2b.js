(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{683:function(t,v,_){"use strict";_.r(v);var r=_(20),d=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("PyQt5学习资料")]),t._v(" "),_("p",[t._v("[toc]")]),t._v(" "),_("p",[t._v("笔者自学PyQt5的过程中，在网上发现了不少友好的新手入门教程，比如：")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/archisama/p/5442071.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Archi的博客"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/Wy1iTYoX7_O81ChMflXXfg",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyQt5图形界面编程"),_("OutboundLink")],1)])]),t._v(" "),_("p",[t._v("但是学习PyQt5的最好方法是阅读官方文档 + 自己动手实践，笔者将分享"),_("a",{attrs:{href:"https://www.riverbankcomputing.com/static/Docs/PyQt5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网文档"),_("OutboundLink")],1),t._v("，翻译部分内容，并整理汇总常用组件。")]),t._v(" "),_("p",[t._v("PyQt5是绑定Python的Qt应用程序框架。")]),t._v(" "),_("p",[t._v("Qt是一组C++库和开发工具，包括平台独立抽象图形用户接口、网络、线程、正则表达式、SQL数据库、SVG、OpenGL、XML、用户和应用程序设置、定位和定位服务、短程通信（NFC和蓝牙）、上网、3D动画、图表、3D数据可视化和应用商店接口。这些功能由1000多个类实现，这些类被封装成一组模块。")]),t._v(" "),_("p",[t._v("PyQt5支持Windows、Linux、UNIX、Android、MacOS和iOS平台。")]),t._v(" "),_("p",[t._v("PyQt5的主页是"),_("a",{attrs:{href:"https://www.riverbankcomputing.com/software/pyqt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.riverbankcomputing.com/software/pyqt/"),_("OutboundLink")],1),t._v("，在这里能找到最新的稳定版本、当前的开发版本和帮助文档的最新版本。当前版本为PyQt5 v5.14.0(2020.02.26)")]),t._v(" "),_("p",[t._v("PyQt5是使用SIP绑定生成器构建的。为了构建和使用PyQt5，必须安装SIP。")]),t._v(" "),_("p",[t._v("PyQt4支持Qt的早期版本。")]),t._v(" "),_("p",[t._v("PyQt5的"),_("a",{attrs:{href:"https://www.riverbankcomputing.com/static/Docs/PyQt5/module_index.html#ref-module-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("模块"),_("OutboundLink")],1),t._v("如下表所示：(按字典序排列)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("模块名")]),t._v(" "),_("th",[t._v("功能")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Enginio")]),t._v(" "),_("td",[t._v("用于访问Qt云服务的类(不推荐)")])]),t._v(" "),_("tr",[_("td",[t._v("QAxContainer")]),t._v(" "),_("td",[t._v("访问ActiveX控件和COM对象的类")])]),t._v(" "),_("tr",[_("td",[t._v("Qt")]),t._v(" "),_("td",[t._v("其他模块的合并")])]),t._v(" "),_("tr",[_("td",[t._v("Qt3DAnimation")]),t._v(" "),_("td",[t._v("在模拟中支持动画的类")])]),t._v(" "),_("tr",[_("td",[t._v("Qt3DCore")]),t._v(" "),_("td",[t._v("支持近实时仿真系统的核心类")])]),t._v(" "),_("tr",[_("td",[t._v("Qt3DExtras")]),t._v(" "),_("td",[t._v("预先构建的元素，与Qt3D一起使用")])]),t._v(" "),_("tr",[_("td",[t._v("Qt3DInput")]),t._v(" "),_("td",[t._v("处理使用Qt3D时用户输入的类")])]),t._v(" "),_("tr",[_("td",[t._v("Qt3DLogic")]),t._v(" "),_("td",[t._v("启用帧同步的类")])]),t._v(" "),_("tr",[_("td",[t._v("Qt3DRender")]),t._v(" "),_("td",[t._v("启用2D和3D呈现的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtAndroidExtras")]),t._v(" "),_("td",[t._v("特定于Android的附加类")])]),t._v(" "),_("tr",[_("td",[t._v("QtBluetooth")]),t._v(" "),_("td",[t._v("支持设备之间蓝牙连接的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtChart")]),t._v(" "),_("td",[t._v("支持2D图表创建的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtCore")]),t._v(" "),_("td",[t._v("Qt核心类")])]),t._v(" "),_("tr",[_("td",[t._v("QtDBus")]),t._v(" "),_("td",[t._v("使用D-Bus协议支持IPC的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtDataVisualization")]),t._v(" "),_("td",[t._v("支持3D数据可视化的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtDesigner")]),t._v(" "),_("td",[t._v("允许使用Python扩展Qt设计器的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtGui")]),t._v(" "),_("td",[t._v("widget和OpenGL gui共有的核心类")])]),t._v(" "),_("tr",[_("td",[t._v("QtHelp")]),t._v(" "),_("td",[t._v("用于创建和查看可搜索文档的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtLocation")]),t._v(" "),_("td",[t._v("用于创建映射应用程序的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtMacExtras")]),t._v(" "),_("td",[t._v("特定于macOS和iOS的附加类")])]),t._v(" "),_("tr",[_("td",[t._v("QtMultimedia")]),t._v(" "),_("td",[t._v("多媒体内容、摄像机和收音机的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtMultimediaWidgets")]),t._v(" "),_("td",[t._v("提供附加的多媒体相关小部件和控件的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtNetwork")]),t._v(" "),_("td",[t._v("核心网络类")])]),t._v(" "),_("tr",[_("td",[t._v("QtNetworkAuth")]),t._v(" "),_("td",[t._v("网络授权类")])]),t._v(" "),_("tr",[_("td",[t._v("QtNfc")]),t._v(" "),_("td",[t._v("支持设备之间NFC连接的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtOpenGL")]),t._v(" "),_("td",[t._v("在传统窗口小部件中呈现OpenGL的类(不推荐)")])]),t._v(" "),_("tr",[_("td",[t._v("QtPositioning")]),t._v(" "),_("td",[t._v("从卫星、wifi等获取定位信息的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtPrintSupport")]),t._v(" "),_("td",[t._v("实现打印的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtPurchasing")]),t._v(" "),_("td",[t._v("支持从应用商店购买应用程序的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtQml")]),t._v(" "),_("td",[t._v("与QML语言集成的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtQuick")]),t._v(" "),_("td",[t._v("使用Python代码扩展QML应用程序的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtQuickWidgets")]),t._v(" "),_("td",[t._v("用于在传统小部件中呈现QML场景的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtRemoteObjects")]),t._v(" "),_("td",[t._v("用于在进程或系统之间共享QObject的API的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtSensors")]),t._v(" "),_("td",[t._v("用于访问系统硬件传感器的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtSerialPort")]),t._v(" "),_("td",[t._v("用于访问系统的串行端口的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtSql")]),t._v(" "),_("td",[t._v("与SQL数据库集成的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtSvg")]),t._v(" "),_("td",[t._v("提供对SVG支持的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtTest")]),t._v(" "),_("td",[t._v("支持GUI应用程序单元测试的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtWebChannel")]),t._v(" "),_("td",[t._v("用于Python和HTML/JavaScript之间的点对点通信的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtWebEngine")]),t._v(" "),_("td",[t._v("用于将QML Web引擎对象与Python集成的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtWebEngineCore")]),t._v(" "),_("td",[t._v("Web引擎核心类")])]),t._v(" "),_("tr",[_("td",[t._v("QtWebEngineWidgets")]),t._v(" "),_("td",[t._v("基于Chromium的web浏览器")])]),t._v(" "),_("tr",[_("td",[t._v("QtWebKit")]),t._v(" "),_("td",[t._v("基于WebKit2的web浏览器(已弃用)")])]),t._v(" "),_("tr",[_("td",[t._v("QtWebKitWidgets")]),t._v(" "),_("td",[t._v("基于WebKit1的web浏览器(已弃用)")])]),t._v(" "),_("tr",[_("td",[t._v("QtWebSockets")]),t._v(" "),_("td",[t._v("实现WebSocket协议的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtWidgets")]),t._v(" "),_("td",[t._v("用于创建经典桌面样式ui的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtWinExtras")]),t._v(" "),_("td",[t._v("特定于Windows的附加类")])]),t._v(" "),_("tr",[_("td",[t._v("QtX11Extras")]),t._v(" "),_("td",[t._v("特定于X11的其他类")])]),t._v(" "),_("tr",[_("td",[t._v("QtXml")]),t._v(" "),_("td",[t._v("支持SAX和DOM到XML接口的类")])]),t._v(" "),_("tr",[_("td",[t._v("QtXmlPatterns")]),t._v(" "),_("td",[t._v("支持其他XML技术的类")])]),t._v(" "),_("tr",[_("td",[t._v("sip")]),t._v(" "),_("td",[t._v("绑定开发人员和用户的实用程序")])]),t._v(" "),_("tr",[_("td",[t._v("uic")]),t._v(" "),_("td",[t._v("用于处理Qt设计器创建的文件的类")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);