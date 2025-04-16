const questions = [
    { q: "Você prefere um som mais calmo ou mais energético?", a: ["Calmo", "Energético"] },
    { q: "Você gosta de se destacar ou prefere ficar nos bastidores?", a: ["Destacar", "Bastidores"] },
    { q: "Prefere tocar solo ou em grupo?", a: ["Solo", "Grupo"] },
    { q: "Qual estilo musical você mais curte?", a: ["Clássico", "Rock", "Pop", "Jazz"] },
    { q: "Você gosta de usar as mãos ou a boca para produzir som?", a: ["Mãos", "Boca"] },
    { q: "Prefere instrumentos de corda, sopro ou percussão?", a: ["Corda", "Sopro", "Percussão"] },
    { q: "Você é mais intuitivo ou técnico?", a: ["Intuitivo", "Técnico"] },
    { q: "Você gosta de ritmo ou melodia?", a: ["Ritmo", "Melodia"] },
    { q: "Você se imagina em uma banda ou orquestra?", a: ["Banda", "Orquestra"] },
    { q: "Você prefere sons graves ou agudos?", a: ["Graves", "Agudos"] }
  ];
  
  const results = [
    {
      title: "Violão",
      img: "https://static.vecteezy.com/ti/vetor-gratis/p1/417036-violao-classico-com-notas-musicais-no-fundo-gratis-vetor.jpg",
      desc: "Você tem um espírito tranquilo e gosta de melodias suaves. O violão é perfeito para sua vibe introspectiva e criativa."
    },
    {
      title: "Bateria",
      img: "https://i.pinimg.com/564x/59/0d/3a/590d3a744942216f97cc054ace06f343.jpg",
      desc: "Energia é seu sobrenome! A bateria combina com sua personalidade vibrante e marcante."
    },
    {
      title: "Saxofone",
      img: "https://st3.depositphotos.com/1526816/16462/v/450/depositphotos_164620152-stock-illustration-saxophone-with-music-notes-in.jpg",
      desc: "Você é expressivo e elegante. O saxofone traduz sua alma artística e refinada."
    },
    {
      title: "Teclado",
      img: "https://thumbs.dreamstime.com/z/teclado-musical-17323478.jpg",
      desc: "Você gosta de variedade e criatividade. O teclado te dá liberdade para explorar diversos estilos."
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function startQuiz() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.q;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    q.a.forEach((answer, i) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => selectAnswer(i);
      answersDiv.appendChild(btn);
    });
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("progress-bar").style.width = `${(current / questions.length) * 100}%`;
  }
  
  function selectAnswer(index) {
    score += index + 1; // Incrementa o score com base no índice da resposta
    document.querySelectorAll("#answers button").forEach(btn => btn.disabled = true);
    document.getElementById("nextBtn").disabled = false;
  }
  
  function nextQuestion() {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    // Ajuste a lógica para determinar o resultado com base no score
    let result;
    const maxScore = questions.length * 3; // Pontuação máxima possível (índice máximo + 1)
    const range = maxScore / results.length; // Divide a pontuação em intervalos iguais

    if (score < range) {
      result = results[0]; // Violão
    } else if (score < range * 2) {
      result = results[1]; // Bateria
    } else if (score < range * 3) {
      result = results[2]; // Saxofone
    } else {
      result = results[3]; // Teclado
    }

    document.getElementById("result-title").textContent = result.title;
    document.getElementById("result-img").src = result.img;
    document.getElementById("result-desc").textContent = result.desc;
  }
  
  function restartQuiz() {
    current = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("intro").classList.remove("hidden");
  } console.log("Script carregado com sucesso");