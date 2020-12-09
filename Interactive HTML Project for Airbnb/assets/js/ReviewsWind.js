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
  name: 'Beijing', 
  rsrc: 'Sue99:10:095537', 
  r: [6.91, 8.48, 12.62, 9.77, 12.55, 11.4, 12.3, 14.11, 14.78, 15.85], 
  type: 'barpolar', 
  marker: {color: '#f0f921'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:de3d4d', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Beijing', 
  hovertemplate: 'Location=Beijing<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace2 = {
  name: 'Hong Kong', 
  rsrc: 'Sue99:10:bb1eff', 
  r: [36.35, 34.93, 30.57, 37.38, 21.4, 42.11, 39.26, 27.19, 41.91, 28.55], 
  type: 'barpolar', 
  marker: {color: '#fdca26'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:9bb528', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Hong Kong', 
  hovertemplate: 'Location=Hong Kong<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace3 = {
  name: 'Melbourne', 
  rsrc: 'Sue99:10:221c60', 
  r: [42.88, 55.27, 48.0, 49.35, 50.48, 46.48, 47.4, 36.42, 40.36, 36.87], 
  type: 'barpolar', 
  marker: {color: '#fb9f3a'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:c475ac', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Melbourne', 
  hovertemplate: 'Location=Melbourne<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace4 = {
  name: 'Shanghai', 
  rsrc: 'Sue99:10:275dd9', 
  r: [13.85, 13.93, 22.08, 23.41, 12.66, 19.55, 21.35, 23.7, 21.13, 17.96], 
  type: 'barpolar', 
  marker: {color: '#ed7953'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:aae753', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Shanghai', 
  hovertemplate: 'Location=Shanghai<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace5 = {
  name: 'Singapore', 
  rsrc: 'Sue99:10:a6e5fc', 
  r: [18.54, 25.6, 24.83, 43.85, 14.39, 27.34, 27.39, 21.71, 17.63, 13.6], 
  type: 'barpolar', 
  marker: {color: '#d8576b'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:41a7ae', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Singapore', 
  hovertemplate: 'Location=Singapore<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace6 = {
  name: 'South Australia', 
  rsrc: 'Sue99:10:1eb627', 
  r: [19.49, 44.47, 43.38, 28.19, 41.31, 35.14, 25.75, 28.18, 20.67, 70.86], 
  type: 'barpolar', 
  marker: {color: '#bd3786'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:adfb84', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'South Australia', 
  hovertemplate: 'Location=South Australia<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace7 = {
  name: 'Sydney', 
  rsrc: 'Sue99:10:fd6d52', 
  r: [33.96, 49.59, 35.1, 37.58, 34.11, 30.29, 29.83, 25.47, 26.89, 23.44], 
  type: 'barpolar', 
  marker: {color: '#9c179e'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:357997', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Sydney', 
  hovertemplate: 'Location=Sydney<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace8 = {
  name: 'Taiwan', 
  rsrc: 'Sue99:10:9f785d', 
  r: [51.27, 39.68, 34.2, 51.35, 33.09, 44.94, 55.99, 38.89, 47.21, 42.01], 
  type: 'barpolar', 
  marker: {color: '#7201a8'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:e72a7c', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Taiwan', 
  hovertemplate: 'Location=Taiwan<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
trace9 = {
  name: 'Tokyo', 
  rsrc: 'Sue99:10:07b295', 
  r: [28.46, 38.9, 34.67, 29.16, 31.04, 29.22, 26.82, 29.39, 26.63, 28.69], 
  type: 'barpolar', 
  marker: {color: '#46039f'}, 
  subplot: 'polar', 
  thetasrc: 'Sue99:10:6b7c74', 
  theta: ['0% to 10%', '10% to 20%', '20% to 30%', '30% to 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% to 100%'], 
  showlegend: true, 
  legendgroup: 'Tokyo', 
  hovertemplate: 'Location=Tokyo<br>number_of_reviews=%{r}<br>Occupancy_rate_Percentage=%{theta}<extra></extra>'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9];
layout = {
  polar: {
    domain: {
      x: [0.0, 1.0], 
      y: [0.0, 1.0]
    }, 
    angularaxis: {
      rotation: 90, 
      direction: 'clockwise'
    }
  }, 
  title: {text: 'Comparison Of The Mean Number Of Reviews Of Rooms For Each Region'}, 
  legend: {
    title: {text: 'Location'}, 
    tracegroupgap: 0
  }, 
  barmode: 'relative', 
  template: {
    data: {
      bar: [
        {
          type: 'bar', 
          marker: {line: {
              color: 'rgb(17,17,17)', 
              width: 0.5
            }}, 
          error_x: {color: '#f2f5fa'}, 
          error_y: {color: '#f2f5fa'}
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
            fill: {color: '#506784'}, 
            line: {color: 'rgb(17,17,17)'}
          }, 
          header: {
            fill: {color: '#2a3f5f'}, 
            line: {color: 'rgb(17,17,17)'}
          }
        }
      ], 
      carpet: [
        {
          type: 'carpet', 
          aaxis: {
            gridcolor: '#506784', 
            linecolor: '#506784', 
            endlinecolor: '#A2B1C6', 
            minorgridcolor: '#506784', 
            startlinecolor: '#A2B1C6'
          }, 
          baxis: {
            gridcolor: '#506784', 
            linecolor: '#506784', 
            endlinecolor: '#A2B1C6', 
            minorgridcolor: '#506784', 
            startlinecolor: '#A2B1C6'
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
          marker: {line: {color: '#283442'}}
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
              color: 'rgb(17,17,17)', 
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
          marker: {line: {color: '#283442'}}
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
        bgcolor: 'rgb(17,17,17)', 
        showland: true, 
        lakecolor: 'rgb(17,17,17)', 
        landcolor: 'rgb(17,17,17)', 
        showlakes: true, 
        subunitcolor: '#506784'
      }, 
      font: {color: '#f2f5fa'}, 
      polar: {
        bgcolor: 'rgb(17,17,17)', 
        radialaxis: {
          ticks: '', 
          gridcolor: '#506784', 
          linecolor: '#506784'
        }, 
        angularaxis: {
          ticks: '', 
          gridcolor: '#506784', 
          linecolor: '#506784'
        }
      }, 
      scene: {
        xaxis: {
          ticks: '', 
          gridcolor: '#506784', 
          gridwidth: 2, 
          linecolor: '#506784', 
          zerolinecolor: '#C8D4E3', 
          showbackground: true, 
          backgroundcolor: 'rgb(17,17,17)'
        }, 
        yaxis: {
          ticks: '', 
          gridcolor: '#506784', 
          gridwidth: 2, 
          linecolor: '#506784', 
          zerolinecolor: '#C8D4E3', 
          showbackground: true, 
          backgroundcolor: 'rgb(17,17,17)'
        }, 
        zaxis: {
          ticks: '', 
          gridcolor: '#506784', 
          gridwidth: 2, 
          linecolor: '#506784', 
          zerolinecolor: '#C8D4E3', 
          showbackground: true, 
          backgroundcolor: 'rgb(17,17,17)'
        }
      }, 
      title: {x: 0.05}, 
      xaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: '#283442', 
        linecolor: '#506784', 
        automargin: true, 
        zerolinecolor: '#283442', 
        zerolinewidth: 2
      }, 
      yaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: '#283442', 
        linecolor: '#506784', 
        automargin: true, 
        zerolinecolor: '#283442', 
        zerolinewidth: 2
      }, 
      mapbox: {style: 'dark'}, 
      ternary: {
        aaxis: {
          ticks: '', 
          gridcolor: '#506784', 
          linecolor: '#506784'
        }, 
        baxis: {
          ticks: '', 
          gridcolor: '#506784', 
          linecolor: '#506784'
        }, 
        caxis: {
          ticks: '', 
          gridcolor: '#506784', 
          linecolor: '#506784'
        }, 
        bgcolor: 'rgb(17,17,17)'
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
      plot_bgcolor: 'rgb(17,17,17)', 
      paper_bgcolor: 'rgb(17,17,17)', 
      shapedefaults: {line: {color: '#f2f5fa'}}, 
      sliderdefaults: {
        bgcolor: '#C8D4E3', 
        tickwidth: 0, 
        bordercolor: 'rgb(17,17,17)', 
        borderwidth: 1
      }, 
      annotationdefaults: {
        arrowhead: 0, 
        arrowcolor: '#f2f5fa', 
        arrowwidth: 1
      }, 
      updatemenudefaults: {
        bgcolor: '#506784', 
        borderwidth: 0
      }
    }
  }
};
Plotly.plot('plotly-div4', {
  data: data,
  layout: layout
});
