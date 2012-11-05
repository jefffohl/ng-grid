/// <reference path="../../lib/jquery-1.8.2.min" />
/// <reference path="../../lib/angular.js" />
/// <reference path="../constants.js"/>
/// <reference path="../namespace.js" />
/// <reference path="../navigation.js"/>
/// <reference path="../utils.js"/>

ng.defaultGridTemplate = function () {
    var b = new ng.utils.StringBuilder();
    b.append('<div class="ngGrid">');
    b.append('	 <div class="ngTopPanel" ng-size="headerDim">');
    b.append('      <div class="ngHeaderContainer" ng-size="headerDim">');
    b.append('         <div class="ngHeaderScroller" ng-style="headerScrollerWidth()" ng-header-row></div>');
    b.append('    	</div>');
    b.append('	 </div>');
    b.append('	 <div class="ngViewport" ng-size="viewportDim">');
    b.append('    	 <div class="ngCanvas" ng-style="canvasHeight()">');
    b.append('           <div ng-style="rowStyle(row)" ng-repeat="row in renderedRows" ng-click="row.toggleSelected($event)" class="ngRow" ng-class="{\'selected\': row.selected}" ng-class-odd="row.alternatingRowClass()" ng-class-even="row.alternatingRowClass()" ng-row></div>');
    b.append('       </div>');
    b.append('	 </div>');
    b.append('	 <div class="ngFooterPanel" ng-size="footerDim">');
    b.append('   	 <div class="ngTotalSelectContainer" ng-show="footerVisible">');
    b.append('           <div class="ngFooterTotalItems" ng-class="{\'ngNoMultiSelect\': !multiSelect}" >');
    b.append('          		 <span class="ngLabel">Total Items: {{totalItemsLength()}}</span>');
    b.append('       	 </div>');
    b.append('       	 <div class="ngFooterSelectedItems" ng-show="multiSelect">');
    b.append('       	    <span class="ngLabel">Selected Items: {{selectedItems.length}}</span>');
    b.append('       	 </div>');
    b.append('       </div>');
    b.append('   </div>');
    b.append('</div>');
    return b.toString();
};