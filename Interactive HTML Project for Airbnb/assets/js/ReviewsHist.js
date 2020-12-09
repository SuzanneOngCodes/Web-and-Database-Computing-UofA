// You can reproduce this figure in node.js with the following code!

// Learn about API authentication here: https://plotly.com/nodejs/getting-started
// Find your api_key here: https://plotly.com/settings/api

var plotly = require('plotly')('username', 'api_key');
trace1 = {
  name: '', 
  type: 'histogram', 
  xsrc: 'Sue99:15:a0a09b', 
  x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
  ysrc: 'Sue99:15:c2220e', 
  y: [6.91, 36.35, 42.88, 13.85, 18.54, 19.49, 33.96, 51.27, 28.46], 
  xaxis: 'x', 
  yaxis: 'y', 
  marker: {
    color: '#636efa', 
    opacity: 0.5
  }, 
  bingroup: 'x', 
  histfunc: 'sum', 
  showlegend: false, 
  legendgroup: '', 
  offsetgroup: '', 
  orientation: 'v', 
  hovertemplate: 'Occupancy_rate_Percentage=0% to 10%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
  alignmentgroup: 'True'
};
trace2 = {
  name: '', 
  type: 'box', 
  xsrc: 'Sue99:15:0e0c58', 
  x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
  xaxis: 'x2', 
  yaxis: 'y2', 
  marker: {color: '#636efa'}, 
  notched: true, 
  showlegend: false, 
  legendgroup: '', 
  offsetgroup: '', 
  hovertemplate: 'Occupancy_rate_Percentage=0% to 10%<br>Location=%{x}<extra></extra>', 
  alignmentgroup: 'True'
};
data = [trace1, trace2];
layout = {
  title: {text: 'Comparison Of The Mean Number Of Rooms Occupied For Each Regions'}, 
  xaxis: {
    title: {text: 'Location'}, 
    anchor: 'y', 
    domain: [0.0, 1.0]
  }, 
  yaxis: {
    title: {text: 'sum of number_of_reviews'}, 
    anchor: 'x', 
    domain: [0.0, 0.8316]
  }, 
  legend: {tracegroupgap: 0}, 
  xaxis2: {
    anchor: 'y2', 
    domain: [0.0, 1.0], 
    matches: 'x', 
    showgrid: true, 
    showticklabels: false
  }, 
  yaxis2: {
    ticks: '', 
    anchor: 'x2', 
    domain: [0.8416, 1.0], 
    matches: 'y2', 
    showgrid: false, 
    showline: false, 
    showticklabels: false
  }, 
  barmode: 'overlay', 
  sliders: [
    {
      x: 0.1, 
      y: 0, 
      len: 0.9, 
      pad: {
        b: 10, 
        t: 60
      }, 
      steps: [
        {
          args: [
            ['0% to 10%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '0% to 10%', 
          method: 'animate'
        }, 
        {
          args: [
            ['10% to 20%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '10% to 20%', 
          method: 'animate'
        }, 
        {
          args: [
            ['20% to 30%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '20% to 30%', 
          method: 'animate'
        }, 
        {
          args: [
            ['30% to 40%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '30% to 40%', 
          method: 'animate'
        }, 
        {
          args: [
            ['40% to 50%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '40% to 50%', 
          method: 'animate'
        }, 
        {
          args: [
            ['50% to 60%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '50% to 60%', 
          method: 'animate'
        }, 
        {
          args: [
            ['60% to 70%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '60% to 70%', 
          method: 'animate'
        }, 
        {
          args: [
            ['70% to 80%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '70% to 80%', 
          method: 'animate'
        }, 
        {
          args: [
            ['80% to 90%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '80% to 90%', 
          method: 'animate'
        }, 
        {
          args: [
            ['90% to 100%'], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '90% to 100%', 
          method: 'animate'
        }
      ], 
      active: 0, 
      xanchor: 'left', 
      yanchor: 'top', 
      currentvalue: {prefix: 'Occupancy_rate_Percentage='}
    }
  ], 
  template: {
    data: {
      bar: [
        {
          type: 'bar', 
          marker: {line: {
              color: '#E5ECF6', 
              width: 0.5
            }}, 
          error_x: {color: '#2a3f5f'}, 
          error_y: {color: '#2a3f5f'}
        }
      ], 
      pie: [
        {
          type: 'pie', 
          automargin: true
        }
      ], 
      table: [
        {
          type: 'table', 
          cells: {
            fill: {color: '#EBF0F8'}, 
            line: {color: 'white'}
          }, 
          header: {
            fill: {color: '#C8D4E3'}, 
            line: {color: 'white'}
          }
        }
      ], 
      carpet: [
        {
          type: 'carpet', 
          aaxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: 'white', 
            startlinecolor: '#2a3f5f'
          }, 
          baxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: 'white', 
            startlinecolor: '#2a3f5f'
          }
        }
      ], 
      mesh3d: [
        {
          type: 'mesh3d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      contour: [
        {
          type: 'contour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      heatmap: [
        {
          type: 'heatmap', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      scatter: [
        {
          type: 'scatter', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      surface: [
        {
          type: 'surface', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      barpolar: [
        {
          type: 'barpolar', 
          marker: {line: {
              color: '#E5ECF6', 
              width: 0.5
            }}
        }
      ], 
      heatmapgl: [
        {
          type: 'heatmapgl', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      histogram: [
        {
          type: 'histogram', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      parcoords: [
        {
          line: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}, 
          type: 'parcoords'
        }
      ], 
      scatter3d: [
        {
          line: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}, 
          type: 'scatter3d', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattergl: [
        {
          type: 'scattergl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      choropleth: [
        {
          type: 'choropleth', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattergeo: [
        {
          type: 'scattergeo', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2d: [
        {
          type: 'histogram2d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      scatterpolar: [
        {
          type: 'scatterpolar', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      contourcarpet: [
        {
          type: 'contourcarpet', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattercarpet: [
        {
          type: 'scattercarpet', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattermapbox: [
        {
          type: 'scattermapbox', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterpolargl: [
        {
          type: 'scatterpolargl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterternary: [
        {
          type: 'scatterternary', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2dcontour: [
        {
          type: 'histogram2dcontour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ]
    }, 
    layout: {
      geo: {
        bgcolor: 'white', 
        showland: true, 
        lakecolor: 'white', 
        landcolor: '#E5ECF6', 
        showlakes: true, 
        subunitcolor: 'white'
      }, 
      font: {color: '#2a3f5f'}, 
      polar: {
        bgcolor: '#E5ECF6', 
        radialaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        angularaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }
      }, 
      scene: {
        xaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }, 
        yaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }, 
        zaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }
      }, 
      title: {x: 0.05}, 
      xaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white', 
        zerolinewidth: 2
      }, 
      yaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white', 
        zerolinewidth: 2
      }, 
      mapbox: {style: 'light'}, 
      ternary: {
        aaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        baxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        caxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        bgcolor: '#E5ECF6'
      }, 
      colorway: ['#636efa', '#EF553B', '#00cc96', '#ab63fa', '#FFA15A', '#19d3f3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52'], 
      coloraxis: {colorbar: {
          ticks: '', 
          outlinewidth: 0
        }}, 
      hovermode: 'closest', 
      colorscale: {
        diverging: [['0', '#8e0152'], ['0.1', '#c51b7d'], ['0.2', '#de77ae'], ['0.3', '#f1b6da'], ['0.4', '#fde0ef'], ['0.5', '#f7f7f7'], ['0.6', '#e6f5d0'], ['0.7', '#b8e186'], ['0.8', '#7fbc41'], ['0.9', '#4d9221'], ['1', '#276419']], 
        sequential: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']], 
        sequentialminus: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
      }, 
      hoverlabel: {align: 'left'}, 
      plot_bgcolor: '#E5ECF6', 
      paper_bgcolor: 'white', 
      shapedefaults: {line: {color: '#2a3f5f'}}, 
      annotationdefaults: {
        arrowhead: 0, 
        arrowcolor: '#2a3f5f', 
        arrowwidth: 1
      }
    }
  }, 
  updatemenus: [
    {
      x: 0.1, 
      y: 0, 
      pad: {
        r: 10, 
        t: 70
      }, 
      type: 'buttons', 
      buttons: [
        {
          args: [null, {
            mode: 'immediate', 
            frame: {
              redraw: true, 
              duration: 600
            }, 
            transition: {
              easing: 'linear', 
              duration: 500
            }, 
            fromcurrent: true
          }
          ], 
          label: '&#9654;', 
          method: 'animate'
        }, 
        {
          args: [
            [null], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {
                easing: 'linear', 
                duration: 0
              }, 
              fromcurrent: true
            }
          ], 
          label: '&#9724;', 
          method: 'animate'
        }
      ], 
      xanchor: 'right', 
      yanchor: 'top', 
      direction: 'left', 
      showactive: false
    }
  ]
};
frame1 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:1b75a9', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:354e48', 
      y: [6.91, 36.35, 42.88, 13.85, 18.54, 19.49, 33.96, 51.27, 28.46], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=0% to 10%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:88122b', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=0% to 10%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '0% to 10%', 
  layout: }
};
frame2 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:b1ac0b', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:6571bd', 
      y: [8.48, 34.93, 55.27, 13.93, 25.6, 44.47, 49.59, 39.68, 38.9], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=10% to 20%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:616120', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=10% to 20%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '10% to 20%', 
  layout: }
};
frame3 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:f8bde1', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:4850bd', 
      y: [12.62, 30.57, 48.0, 22.08, 24.83, 43.38, 35.1, 34.2, 34.67], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=20% to 30%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:beac3b', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=20% to 30%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '20% to 30%', 
  layout: }
};
frame4 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:cc78de', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:0d3a4e', 
      y: [9.77, 37.38, 49.35, 23.41, 43.85, 28.19, 37.58, 51.35, 29.16], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=30% to 40%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:f64675', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=30% to 40%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '30% to 40%', 
  layout: }
};
frame5 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:6c898d', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:c10df4', 
      y: [12.55, 21.4, 50.48, 12.66, 14.39, 41.31, 34.11, 33.09, 31.04], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=40% to 50%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:c2fe03', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=40% to 50%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '40% to 50%', 
  layout: }
};
frame6 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:3054b3', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:dd4adb', 
      y: [11.4, 42.11, 46.48, 19.55, 27.34, 35.14, 30.29, 44.94, 29.22], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=50% to 60%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:11fc5b', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=50% to 60%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '50% to 60%', 
  layout: }
};
frame7 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:67efc0', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:85e071', 
      y: [12.3, 39.26, 47.4, 21.35, 27.39, 25.75, 29.83, 55.99, 26.82], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=60% to 70%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:c51f4e', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=60% to 70%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '60% to 70%', 
  layout: }
};
frame8 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:59943d', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:a892ed', 
      y: [14.11, 27.19, 36.42, 23.7, 21.71, 28.18, 25.47, 38.89, 29.39], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=70% to 80%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:1970b7', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=70% to 80%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '70% to 80%', 
  layout: }
};
frame9 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:733cbd', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:8d19ca', 
      y: [14.78, 41.91, 40.36, 21.13, 17.63, 20.67, 26.89, 47.21, 26.63], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=80% to 90%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:5425e0', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=80% to 90%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '80% to 90%', 
  layout: }
};
frame10 = {
  data: [
    {
      name: '', 
      type: 'histogram', 
      xsrc: 'Sue99:15:e73d1f', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      ysrc: 'Sue99:15:b0f52a', 
      y: [15.85, 28.55, 36.87, 17.96, 13.6, 70.86, 23.44, 42.01, 28.69], 
      xaxis: 'x', 
      yaxis: 'y', 
      marker: {
        color: '#636efa', 
        opacity: 0.5
      }, 
      bingroup: 'x', 
      histfunc: 'sum', 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      orientation: 'v', 
      hovertemplate: 'Occupancy_rate_Percentage=90% to 100%<br>Location=%{x}<br>sum of number_of_reviews=%{y}<extra></extra>', 
      alignmentgroup: 'True'
    }, 
    {
      name: '', 
      type: 'box', 
      xsrc: 'Sue99:15:a2f453', 
      x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
      xaxis: 'x2', 
      yaxis: 'y2', 
      marker: {color: '#636efa'}, 
      notched: true, 
      showlegend: false, 
      legendgroup: '', 
      offsetgroup: '', 
      hovertemplate: 'Occupancy_rate_Percentage=90% to 100%<br>Location=%{x}<extra></extra>', 
      alignmentgroup: 'True'
    }
  ], 
  name: '90% to 100%', 
  layout: }
};
frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10];

// Frames are not yet supported by the Node library.
plotly.plot(data, {layout: layout}, function(err, msg) {
  console.log(msg);
});