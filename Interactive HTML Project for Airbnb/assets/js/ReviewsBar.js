// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  name: '', 
  type: 'bar', 
  xsrc: 'Sue99:13:7775de', 
  x: ['Beijing', 'Hong Kong', 'Melbourne', 'Shanghai', 'Singapore', 'South Australia', 'Sydney', 'Taiwan', 'Tokyo'], 
  ysrc: 'Sue99:13:c3fff7', 
  y: [34.81481481481481, 7.17514124293785, 25.126409957215095, 26.546681664791894, 11.07544141252007, 47.656025309174574, 30.8675184936113, 6.83658170914543, 7.698170731707315], 
  xaxis: 'x', 
  yaxis: 'y', 
  marker: {color: '#636efa'}, 
  showlegend: false, 
  legendgroup: '', 
  offsetgroup: '', 
  orientation: 'v', 
  textposition: 'auto', 
  hovertemplate: 'Location=%{x}<br>Percentage difference (%)=%{y}<extra></extra>', 
  alignmentgroup: 'True'
};
data = [trace1];
layout = {
  xaxis: {
    title: {text: 'Location'}, 
    anchor: 'y', 
    domain: [0.0, 1.0]
  }, 
  yaxis: {
    title: {text: 'Percentage difference (%)'}, 
    anchor: 'x', 
    domain: [0.0, 1.0]
  }, 
  legend: {tracegroupgap: 0}, 
  margin: {t: 60}, 
  barmode: 'relative', 
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
  }
};
Plotly.plot('plotly-div5', {
  data: data,
  layout: layout
});
