const operadores = [
    "ANDRE CAMPANHARO",
    "FELIX JUNIOR",
    "HIGO TAMANINI",
    "HENRIQUE SIMÕES",
    "ITAMAR VALVASSORI",
    "ITAMAR FILHO",
    "LEONY BREDA",
    "RODRIGO PEREIRA",
    "RONAN MARCHI"
  ];
  
const material = [
    "SUGGAR",
    "L. SHADOW",
    "BORGHINI S.",
    "BORGHINI",
    "VENATO",
    "LÁZARO",
    "PURE WHITE",
    "DIVINE",
    "DUOMO",
    "STATUARIO",
    "F. BLACK",
    "F. WHITE",
    "F. GOLD",
    "MISTY",
    "MILANO",
    "ABSOLUTE BLACK",
    "BRANCO ABS.",
    "PALISADES G.",
    "B. CARRARA",
    "TUSCAN DARK",
    "TUSCAN LIGHT",
    "QTZ DIAMANTE",
    "CELESTIAL BLUE",
    "MOLOKINI BLUE",
    "SILVER MOON",
    "GRAPHITE",
    "BRANCO ALPINE",
    "Q. TESTE",
    "DENALI",
    "DARK NEBULA",
    "GRIS MAORI",
    "NEW LAZARO",
    "ICEBERG",
    "ARABESCATO",
    "F. AZUL",
    "CITY",
    "SMOKY PATAGONIA",
    "MATARAZZO",
    "FERRARA ORO",
    "AGATA"
  ];

  const opcoes = {
    'ROBÔ DE SAÍDA': ["LINHA 1","LINHA 2"],
    'ROBÔ DE ENTRADA': ["COMUM"],
    'WIP': ["POLIMENTO"],
    'MOVIMENTAÇÃO': ["POLIMENTO"],
  };
  
  function atualizarOpcoes() {
    const categoria = document.getElementById("categoria").value;
    const itensSelect = document.getElementById("itensSelect");
  
    itensSelect.innerHTML = "";
  
    if (categoria && opcoes[categoria]) {
      opcoes[categoria].forEach(item => {
        const option = document.createElement("option");
        option.value = item.toLowerCase();
        option.textContent = item;
        itensSelect.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.textContent = "-- Selecione uma categoria primeiro --";
      itensSelect.appendChild(option);
    }
  }
  
  
  // Preenche o <select> com os nomes
  const operadorSelect = document.getElementById("operadorSelect");
  operadores.forEach(nome => {
    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    operadorSelect.appendChild(option);
  });
  
  // Carrega setores
  const materialSelect = document.getElementById("materialSelect");
  material.forEach(setor => {
    const option = document.createElement("option");
    option.value = setor;
    option.textContent = setor;
    materialSelect.appendChild(option);
  });
