let myBarChart = null;
let myAnelChart = null;
let myPieChart = null;
let myLinhaChart = null;
let myPolarChart = null;
let myRadarChart = null;

function inicializarTodosOsGraficos() {
  const barra = document.getElementById('barra');
  if (barra) {
    myBarChart = new Chart(barra, {
    type: 'bar',
    data: {
      labels: ['Teams', 'VS Code', 'Parsec', 'TeamViewer', 'GoogleRemote'],
      datasets: [{
        borderWidth: 2,
        borderColor: [
          'rgba(142, 130, 255, 1)',
          'rgba(0, 225, 255, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(0, 55, 255, 1)',
          'rgba(255, 150, 0, 1)'
        ],
        backgroundColor: [
          'rgba(142, 130, 255, 0.4)',
          'rgba(0, 225, 255, 0.4)',
          'rgba(255, 0, 0, 0.4)',
          'rgba(0, 55, 255, 0.4)',
          'rgba(255, 149, 0, 0.4)'
        ],
        hoverBackgroundColor: [
          'rgba(142, 130, 255, 0.6)',
          'rgba(0, 225, 255, 0.6)',
          'rgba(255, 0, 0, 0.6)',
          'rgba(0, 55, 255, 0.6)',
          'rgba(255, 149, 0, 0.6)'
        ],

        label: 'Frequência de Uso de Softwares/Recursos para atividades escolares',
        data: [20, 65, 15, 98, 90],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false, 
        },
        tooltip: {
          enabled: true, 
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100, 

          ticks: {
            stepSize: 25,
            callback: function(value) {
              return value + ' %';
            },
          },
        },
      },
    }
    });
  } 

  const anel = document.getElementById('anel');
    if (anel) {
      myAnelChart = new Chart(anel, {
      type: 'doughnut',
      data: {
        labels: ['Trabalho', 'Faculdade', 'Lições', 'Descanso'],
        datasets: [{
          label: 'Distribuição de Tempo, Em Horas',
          data: [8, 3, 3, 0.3],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  const pie = document.getElementById('pie');
  if (pie) {
    myPieChart = new Chart(pie, {
      type: 'pie',
      data: {
        labels: ['Algoritimos e Lógica de Programação', 'Modelagem de Banco de Dados', 'Engenharia de Software(Sem Aula)', 'Sistemas Operacionais e Redes de Computadores', 'Desenvolvimento Web I', 'Desing Digital (Ainda não teve nota)'],
        datasets: [{
          label: 'Notas',
          data: [7.5, 7, 10, 10, 3, 0],
          borderWidth: 2,

          borderColor: [
            'rgba(0, 128, 255, 1)',
            'rgba(255, 0, 123, 1)',
            'rgba(214, 66, 255, 1)',
            'rgba(0, 16, 162, 1)',
            'rgba(255, 54, 195, 1)',
            'rgba(76, 255, 157, 1)'

          ],

          backgroundColor: [
            'rgba(0, 128, 255, 0.4)',
            'rgba(255, 0, 123, 0.4)',
            'rgba(214, 66, 255, 0.4)',
            'rgba(0, 16, 162, 0.4)',
            'rgba(255, 54, 195, 0.4)',
            'rgba(76, 255, 157, 0.4)'
          ],
          hoverBackgroundColor: [
            'rgba(0, 128, 255, 0.6)',
            'rgba(255, 0, 123, 0.6)',
            'rgba(214, 66, 255, 0.6)',
            'rgba(0, 16, 162, 0.6)',
            'rgba(255, 54, 195, 0.6)',
            'rgba(76, 255, 157, 0.6)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }  

  const linha = document.getElementById('linha');
  if (linha) {
    myLinhaChart = new Chart(linha, {
      type: 'line',
      data: {
        labels: ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Quantidade de Dias Letivos',
          data: [22, 26, 25, 20, 14],
          fill: false,
          borderColor: 'rgba(255, 84, 84, 1)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: 0,
            max: 30,
          }
        }
      }
    });
  }

  const polar = document.getElementById('polar');
  if (polar) {
    myPolarChart = new Chart(polar, {
      type: 'polarArea',
      data: {
        labels: ['Parsec', 'TeamViewer', 'Google Remote'],
        datasets: [{
          label: 'Score do Software de Acesso Remoto',
          data: [7, 6, 10],
          tension: 0.1,

          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 55, 255, 1)',
            'rgba(255, 150, 0, 1)'
          ],

          backgroundColor: [
            'rgba(255, 0, 0, 0.4)',
            'rgba(0, 55, 255, 0.4)',
            'rgba(255, 149, 0, 0.4)'
          ],
          hoverBackgroundColor:[
            'rgba(255, 0, 0, 0.6)',
            'rgba(0, 55, 255, 0.6)',
            'rgba(255, 149, 0, 0.6)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, 
      }
    });
  }

  const radar = document.getElementById('radar');
  if (radar) {
    myRadarChart = new Chart(radar, {
      type: 'radar',
      data: {
        labels: ['Custo', 'Praticidade', 'Qualidade de Imagem', 'Recursos', 'Conexão com Internet'],
        datasets: [{
          label: 'Parsec',
          data: [9, 7, 6, 5, 3],
          pointRadius: 5,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
          pointHoverRadius: 10
          }, {
          label: 'Team Viewer',
          data: [4, 6, 8, 9, 4],
          pointRadius: 5,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          hoverBackgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          pointHoverRadius: 10
        }, {
          label: 'Google Remote Desktop',
          data: [10, 10, 6, 2, 4],
          pointRadius: 5,
          fill: true,
          backgroundColor: 'rgba(235, 202, 54, 0.2)',
          hoverBackgroundColor: 'rgba(235, 175, 54, 0.5)',
          borderColor: 'rgb(235, 175, 54)',
          pointBackgroundColor: 'rgb(235, 175, 54)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(235, 175, 54, 1)',
          pointHoverRadius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'dataset',
            intersect: false, 
          },
          animation: {
            duration: 500
          },
          plugins: {
            tooltip: {
                enabled: true,
            }
          },
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
            min: 0,
            max: 10,
          }
        }
      }
    });
  }
}

var graficoTabLink = document.querySelector('a[href="#menu6"]'); 

if (graficoTabLink) {
    
    graficoTabLink.addEventListener('shown.bs.tab', function (e) {
      setTimeout(function() {
        inicializarTodosOsGraficos();

        if (myBarChart) myBarChart.resize();
        if (myAnelChart) myAnelChart.resize();
        if (myBarChart) myLinhaChart.resize();
        if (myAnelChart) myPieChart.resize();
        if (myBarChart) myPolarChart.resize();
        if (myAnelChart) myRadarChart.resize();

    }, 250);
  });
}