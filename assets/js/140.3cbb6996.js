(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{685:function(i,e,v){"use strict";v.r(e);var t=v(20),_=Object(t.a)({},(function(){var i=this,e=i.$createElement,v=i._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[v("p",[i._v("[toc]")]),i._v(" "),v("p",[i._v("QDockWidget充当它的子控件的容器，其尺寸设置由其子控件决定，QDockWidget本身不做尺寸大小方面的设置。")]),i._v(" "),v("p",[v("strong",[i._v("QMainWindow提供了一系列函数来管理和操控QDockWidget：")])]),i._v(" "),v("ul",[v("li",[i._v("addDockWidget()： 添加一个给定的停靠窗口到指定区域；")]),i._v(" "),v("li",[i._v("splitDockWidget()： 把两个dock进行左右或上下并排布置，做成一个类似QSplitter的功能；")]),i._v(" "),v("li",[i._v("tabifyDockWidget()： 移动第二个停靠窗口到第一个停靠窗口，可以在主窗口中生成一个标签样式的停靠窗口；")]),i._v(" "),v("li",[i._v("tabifiedDockWidgets()： 返回和指定停靠窗口形成标签样式的停靠窗口列表；")]),i._v(" "),v("li",[i._v("removeDockWidget()： 从主窗口布局中移除停靠窗口，并隐藏它，注意，停靠窗口并不会被删除；")]),i._v(" "),v("li",[i._v("restoreDockWidget()： 恢复停靠窗口的状态；")]),i._v(" "),v("li",[i._v("dockWidgetArea()： 返回指定停靠窗口的停靠区域，返回值为Qt. DockWidgetArea的相关取值；")]),i._v(" "),v("li",[i._v("resizeDocks()： 改变指定停靠窗口列表的尺寸；")]),i._v(" "),v("li",[i._v("setDockNestingEnabled ()： 设置停靠窗口是否可以嵌套；")]),i._v(" "),v("li",[i._v("isDockNestingEnabled()： 返回停靠窗口是否有可嵌套的特性；")]),i._v(" "),v("li",[i._v("setDockOptions()： 设置停靠窗口的停靠属性,取值见QMainWindow. DockOption；")]),i._v(" "),v("li",[i._v("dockOptions()： 获得停靠窗口的停靠属性。")])]),i._v(" "),v("p",[i._v("Qt. DockWidgetArea取值列表:")]),i._v(" "),v("ul",[v("li",[i._v("LeftDockWidgetArea： 窗口可在左侧停靠；")]),i._v(" "),v("li",[i._v("RightDockWidgetArea： 窗口可在右侧停靠；")]),i._v(" "),v("li",[i._v("TopDockWidgetArea： 窗口可在顶端停靠；")]),i._v(" "),v("li",[i._v("BottomDockWidgetArea： 窗口可在底端停靠；")]),i._v(" "),v("li",[i._v("AllDockWidgetArea： 窗口可在任意方向停靠；：")]),i._v(" "),v("li",[i._v("NoDockWidgetArea： 只可停靠在插入处。")])]),i._v(" "),v("p",[i._v("QMainWindow. DockOption取值列表：")]),i._v(" "),v("ul",[v("li",[i._v("AnimatedDocks： 动画方式停靠；")]),i._v(" "),v("li",[i._v("AllowNestedDocks： 允许嵌套；")]),i._v(" "),v("li",[i._v("AllowTabbedDocks： 允许标签页方式停靠；")]),i._v(" "),v("li",[i._v("ForceTabbedDocks： 强制标签页方式停靠；")]),i._v(" "),v("li",[i._v("VerticalTabs： 垂直标签页方式；")]),i._v(" "),v("li",[i._v("GroupedDragging： 允许成组拖动标签页停靠窗口。")])]),i._v(" "),v("p",[i._v("QMainWindow中关于停靠窗口操作的相关信号：")]),i._v(" "),v("ul",[v("li",[i._v("tabifiedDockWidgetActivated： 选中标签停靠区中的停靠窗口并激活时发射该信号。")])]),i._v(" "),v("p",[i._v("QDockWidget常用方法有：")]),i._v(" "),v("ul",[v("li",[i._v("setFeatures()： 设置停靠窗口的属性，取值见QDockWidget. DockWidgetFeature；")]),i._v(" "),v("li",[i._v("features()： 获得停靠窗口的特性设置；")]),i._v(" "),v("li",[i._v("setFloating()： 设置停靠窗口是否可浮动；")]),i._v(" "),v("li",[i._v("isFloating()： 获得停靠窗口的可浮动属性；")]),i._v(" "),v("li",[i._v("setAllowedAreas()： 设置允许停靠的区域，取值为Qt. DockWidgetArea相关取值；")]),i._v(" "),v("li",[i._v("allowedAreas()： 获得停靠窗口允许停靠的区域；")]),i._v(" "),v("li",[i._v("setTitleBarWidget()： 设置停靠窗口标题栏部件；")]),i._v(" "),v("li",[i._v("titleBarWidget()： 获得停靠窗口标题栏部件。")])]),i._v(" "),v("p",[i._v("QDockWidget. DockWidgetFeature取值列表:")]),i._v(" "),v("ul",[v("li",[i._v("DockWidgetClosable： 允许关闭，在一些系统上会显示一个关闭按钮；")]),i._v(" "),v("li",[i._v("DockWidgetMovable： 允许在Dock之间移动；")]),i._v(" "),v("li",[i._v("DockWidgetFloatable： 允许作为一个独立窗口浮动；")]),i._v(" "),v("li",[i._v("DockWidgetVerticalTitleBar： 在Dock左侧显示一个垂直标题栏；")]),i._v(" "),v("li",[i._v("NoDockWidgetFeatures： 无具体特性设置，无法关闭、移动或者浮动。")])]),i._v(" "),v("p",[i._v("QDockWidget常用信号：")]),i._v(" "),v("ul",[v("li",[i._v("featuresChanged： 停靠窗口的特性发生了改变时发射该信号；")]),i._v(" "),v("li",[i._v("topLevelChanged： 停靠窗口的浮动属性发生了改变时发射该信号；")]),i._v(" "),v("li",[i._v("allowedAreasChanged： 停靠窗口的允许停靠区域发生了改变时发射该信号；")]),i._v(" "),v("li",[i._v("visibilityChanged： 停靠窗口的可视属性(显示/隐藏)发生改变时发射该信号；")]),i._v(" "),v("li",[i._v("dockLocationChanged： 停靠窗口的位置发生了改变时发射该信号。")])]),i._v(" "),v("p",[i._v("QDockWidget类继承关系：")]),i._v(" "),v("p",[v("img",{attrs:{src:"https://i2.wp.com/img-blog.csdnimg.cn/img_convert/1253a44a7a8a55d8e8ecdc93ffa1fc22.png",alt:"实战PyQt5: 052-停靠窗口控件QDockWidget"}})])])}),[],!1,null,null,null);e.default=_.exports}}]);