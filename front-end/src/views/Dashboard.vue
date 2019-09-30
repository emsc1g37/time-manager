<template>
  <div class="graph" id="chartdiv"></div>
</template>

<!-- Resources -->
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/plugins/timeline.js"></script>
<script src="https://www.amcharts.com/lib/4/plugins/bullets.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Vue from "vue";
am4core.useTheme(am4themes_animated);
import axios from "axios";
const moment = require("moment");
export default {
  name: "Dashboard",
  data() {
    return { data: "" };
  },
  mounted() {
<<<<<<< HEAD
    const id = Vue.prototype.$user.get().id;
    const token = Vue.prototype.$user.get().token; //TODO local storage
=======
    const id = "";
    const token = ""; //TODO local storage
>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
    axios
      .get(
        "http://localhost:3000/api/users/" +
          id +
          "/workingTimes/?from=2019-09-01&to=" +
          moment(Date.now()).format("YYYY-MM-DD"),
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token
          }
        }
      )
      .then(response => {
        this.data = response.data;
        this.graph();
      });
  },
  methods: {
    graph() {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end
<<<<<<< HEAD
      var container = am4core.create("chartdiv", am4core.Container);
      container.width = am4core.percent(100);
      container.height = am4core.percent(100);
      var interfaceColors = new am4core.InterfaceColorSet();
      var colorSet = new am4core.ColorSet();
=======

      var container = am4core.create("chartdiv", am4core.Container);
      container.width = am4core.percent(100);
      container.height = am4core.percent(100);

      var interfaceColors = new am4core.InterfaceColorSet();
      var colorSet = new am4core.ColorSet();

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var chart = container.createChild(am4plugins_timeline.CurveChart);
      this.data.forEach(element => {
        const formatedData = {
          start: element.arrival,
          end: element.departure,
          task: moment(element.arrival).format("YYYY-MM-DD")
        };
        chart.data.push(formatedData);
      });
      chart.data.reverse();
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      chart.dateFormatter.dateFormat = "yyyy-MM-dd hh:mm";
      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd hh:mm";
      chart.dy = 90;
      chart.maskBullets = false;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "task";
      categoryAxis.renderer.labels.template.paddingRight = 25;
      categoryAxis.renderer.minGridDistance = 10;
      categoryAxis.renderer.innerRadius = 0;
      categoryAxis.renderer.radius = 100;
      categoryAxis.renderer.grid.template.location = 1;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 70;
      dateAxis.min = new Date("2019-07-10 05:00").getTime();
      dateAxis.max = Date.now();
<<<<<<< HEAD
      dateAxis.baseInterval = { count: 1, timeUnit: "minute" };
      dateAxis.startLocation = -0.5;
=======

      dateAxis.baseInterval = { count: 1, timeUnit: "minute" };
      dateAxis.startLocation = -0.5;

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      dateAxis.renderer.points = [
        { x: -400, y: 0 },
        { x: -250, y: 0 },
        { x: 0, y: 60 },
        { x: 250, y: 0 },
        { x: 400, y: 0 }
      ];
      dateAxis.renderer.autoScale = false;
      dateAxis.renderer.polyspline.tensionX = 0.8;
      dateAxis.renderer.tooltipLocation = 0;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.line.strokeDasharray = "1,4";
      dateAxis.renderer.line.strokeOpacity = 0.7;
      dateAxis.tooltip.background.fillOpacity = 0.2;
      dateAxis.tooltip.background.cornerRadius = 5;
      dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
        "alternativeBackground"
      );
      dateAxis.tooltip.label.paddingTop = 7;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var labelTemplate = dateAxis.renderer.labels.template;
      labelTemplate.verticalCenter = "middle";
      labelTemplate.fillOpacity = 0.7;
      labelTemplate.background.fill = interfaceColors.getFor("background");
      labelTemplate.background.fillOpacity = 1;
      labelTemplate.padding(7, 7, 7, 7);
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var series = chart.series.push(
        new am4plugins_timeline.CurveColumnSeries()
      );
      series.columns.template.height = am4core.percent(15);
      series.columns.template.tooltipText =
        "{categoryX}: [bold]{openDateX}[/] - [bold]{DateX}[/]";
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      series.dataFields.openDateX = "start";
      series.dataFields.dateX = "end";
      series.dataFields.categoryY = "task";
      series.columns.template.propertyFields.fill = "color"; // get color from data
      series.columns.template.propertyFields.stroke = "color";
      series.columns.template.strokeOpacity = 0;
<<<<<<< HEAD
      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index * 3);
      });
=======

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index * 3);
      });

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var flagBullet1 = new am4plugins_bullets.FlagBullet();
      series.bullets.push(flagBullet1);
      flagBullet1.disabled = true;
      flagBullet1.propertyFields.disabled = "bulletf1";
      flagBullet1.locationX = 1;
      flagBullet1.label.text = "start";
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var flagBullet2 = new am4plugins_bullets.FlagBullet();
      series.bullets.push(flagBullet2);
      flagBullet2.disabled = true;
      flagBullet2.propertyFields.disabled = "bulletf2";
      flagBullet2.locationX = 0;
      flagBullet2.background.fill = interfaceColors.getFor("background");
      flagBullet2.label.text = "end";
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var bullet = new am4charts.CircleBullet();
      series.bullets.push(bullet);
      bullet.circle.radius = 3;
      bullet.circle.strokeOpacity = 0;
      bullet.locationX = 0;
<<<<<<< HEAD
      bullet.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index * 3);
      });
=======

      bullet.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index * 3);
      });

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var bullet2 = new am4charts.CircleBullet();
      series.bullets.push(bullet2);
      bullet2.circle.radius = 3;
      bullet2.circle.strokeOpacity = 0;
      bullet2.propertyFields.fill = "color";
      bullet2.locationX = 1;
<<<<<<< HEAD
      bullet2.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index * 3);
      });
=======

      bullet2.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index * 3);
      });

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.align = "center";
      chart.scrollbarX.width = 800;
      chart.scrollbarX.parent = chart.bottomAxesContainer;
      chart.scrollbarX.dy = -90;
      chart.scrollbarX.opacity = 0.4;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var cursor = new am4plugins_timeline.CurveCursor();
      chart.cursor = cursor;
      cursor.xAxis = dateAxis;
      cursor.yAxis = categoryAxis;
      cursor.lineY.disabled = true;
      cursor.lineX.strokeDasharray = "1,4";
      cursor.lineX.strokeOpacity = 1;
<<<<<<< HEAD
      dateAxis.renderer.tooltipLocation2 = 0;
      categoryAxis.cursorTooltipEnabled = false;
      // clock
      var clock = container.createChild(am4charts.GaugeChart);
      clock.toBack();
=======

      dateAxis.renderer.tooltipLocation2 = 0;
      categoryAxis.cursorTooltipEnabled = false;

      // clock
      var clock = container.createChild(am4charts.GaugeChart);
      clock.toBack();

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      clock.radius = 120;
      clock.dy = -100;
      clock.startAngle = -90;
      clock.endAngle = 270;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var axis = clock.xAxes.push(new am4charts.ValueAxis());
      axis.min = 0;
      axis.max = 12;
      axis.strictMinMax = false;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      axis.renderer.line.strokeWidth = 1;
      axis.renderer.line.strokeOpacity = 0.5;
      axis.renderer.line.strokeDasharray = "1,4";
      axis.renderer.minLabelPosition = 0.05; // hides 0 label
      axis.renderer.inside = true;
      axis.renderer.labels.template.radius = 30;
      axis.renderer.grid.template.disabled = true;
      axis.renderer.ticks.template.length = 12;
      axis.renderer.ticks.template.strokeOpacity = 1;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      // serves as a clock face fill
      var range = axis.axisRanges.create();
      range.value = 0;
      range.endValue = 12;
      range.grid.visible = false;
      range.tick.visible = false;
      range.label.visible = false;
<<<<<<< HEAD
      var axisFill = range.axisFill;
=======

      var axisFill = range.axisFill;

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      // handst
      var hourHand = clock.hands.push(new am4charts.ClockHand());
      hourHand.radius = am4core.percent(60);
      hourHand.startWidth = 5;
      hourHand.endWidth = 5;
      hourHand.rotationDirection = "clockWise";
      hourHand.pin.radius = 8;
      hourHand.zIndex = 1;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      var minutesHand = clock.hands.push(new am4charts.ClockHand());
      minutesHand.rotationDirection = "clockWise";
      minutesHand.startWidth = 3;
      minutesHand.endWidth = 3;
      minutesHand.radius = am4core.percent(78);
      minutesHand.zIndex = 2;
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
      chart.cursor.events.on("cursorpositionchanged", function(event) {
        var value = dateAxis.positionToValue(event.target.xPosition);
        var date = new Date(value);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        // set hours
        hourHand.showValue(hours + minutes / 60, 0);
        // set minutes
        minutesHand.showValue((12 * minutes) / 60, 0);
      });
    }
  }
};
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
#chartdiv {
  width: 100%;
  height: 600px;
}
<<<<<<< HEAD
=======

>>>>>>> 841410e1a6da31b70dd4dc9055a90a2d23a58387
.demo-theme-dark .demo-background {
  background: #000;
}
</style>