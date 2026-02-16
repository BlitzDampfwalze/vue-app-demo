<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import usaJson from '../assets/usa.json' 
import { getDemoData, getConnections } from '../data.js'

const props = defineProps({
  date: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:totalDemand'])

const chartRef = ref(null)
const chartInstance = ref(null)

const initChart = () => {
  echarts.registerMap('USA', usaJson)
  chartInstance.value = echarts.init(chartRef.value)
  updateChart(props.date)
}

const updateChart = (selectedDate) => {
  if (!chartInstance.value) return

  const cityData = getDemoData(selectedDate)
  const lineData = getConnections()

  const sum = cityData.reduce((acc, city) => acc + city.value[2], 0)
  emit('update:totalDemand', sum)

  const option = {
    backgroundColor: '#ffffff',
    tooltip: {
      show: true,
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      textStyle: { color: '#333' },
      extraCssText: 'box-shadow: 0 0 10px rgba(0,0,0,0.2); border-radius: 4px;'
    },
    title: {
      text: 'National Power Grid Flow',
      left: 'center',
      top: 20,
      textStyle: { color: '#2c3e50', fontSize: 22, fontWeight: 'bold' }
    },
    geo: {
      map: 'USA',
      z: 1,
      roam: true,
      itemStyle: {
        areaColor: '#f6f6f6',
        borderColor: '#ccd1d9',
        borderWidth: 1
      }
    },
    visualMap: {
      min: 0,
      max: 120,
      show: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      dimension: 2,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027']
      }
    },
    series: [
      {
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 3,
        tooltip: {
          formatter: (params) => {
            return `Transmission Line: ${params.data.coords[0]} to ${params.data.coords[1]}`;
          }
        },
        effect: {
          show: true,
          period: 4,
          trailLength: .9, 
          color: '#f39c12',
          symbolSize: 3
        },
        lineStyle: {
          color: '#3498db',
          width: 1.5, // line thickness
          opacity: 0.9,
          curveness: 0.1
        },
        data: lineData
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        tooltip: {
          formatter: (params) => {
            const val = params.value[2].toFixed(2);
            return `<div style="font-weight:bold">${params.name}</div>
                    <div style="color:#d73027">Demand: ${val} MW</div>`;
          }
        },
        rippleEffect: { brushType: 'stroke', scale: 2 },
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
          color: '#34495e',
          fontWeight: 'bold',
          fontSize: 11
        },
        symbolSize: (val) => val[2] / 5,
        data: cityData
      }
    ]
  }
  chartInstance.value.setOption(option, true) // forced re-render
}

onMounted(initChart)
watch(() => props.date, updateChart)
</script>

<template>
  <div ref="chartRef" style="width: 1100px; height: 700px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"></div>
</template>