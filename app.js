const descriptions = {
  rokujido: {
    title: '六時堂',
    text: '六時堂を中心に、亀池・石舞台との位置関係を概念的に俯瞰します。寸法や形状は正確な測量図ではなく、現地鑑賞のための読み解き図です。'
  },
  roof: {
    title: '本瓦葺の屋根',
    text: '保存修理で印象を大きく左右するのが瓦屋根です。古い瓦と新しい瓦をただ混ぜるのではなく、状態・反り・色・方角を考えて戻すため、完成後も「新品感」は強く出にくい設計です。'
  },
  floor: {
    title: '床下と柱まわり',
    text: '外から見えにくい床下・構造部分は、耐震性や長寿命化に関わる重要な場所です。見た目が大きく変わらなくても、建物の安心感はここで支えられます。'
  },
  metal: {
    title: '飾り金物',
    text: '飾り金物のような細部は、外して補修し、再び戻すことで歴史的な表情を保ちます。目立たない小さな点が、古建築らしさを決めています。'
  },
  ishibutai: {
    title: '石舞台',
    text: '六時堂の前にある石舞台は、堂を単体の建物ではなく「境内の場」として見る手がかりになります。俯瞰すると、建物と儀礼空間の関係が見えやすくなります。'
  }
};

const modeLabels = {
  overview: '全体俯瞰',
  roof: '瓦屋根レイヤー',
  structure: '構造レイヤー',
  repair: '修復レイヤー'
};

const modeDefaultTarget = {
  overview: 'rokujido',
  roof: 'roof',
  structure: 'floor',
  repair: 'metal'
};

const body = document.body;
const modeButtons = Array.from(document.querySelectorAll('.mode-button'));
const hotspots = Array.from(document.querySelectorAll('.hotspot'));
const titleEl = document.getElementById('selectedTitle');
const textEl = document.getElementById('selectedText');
const modeLabel = document.getElementById('modeLabel');
const templeMap = document.getElementById('templeMap');
const rotateRange = document.getElementById('rotateRange');
const rotationValue = document.getElementById('rotationValue');

body.dataset.mode = 'overview';

function selectTarget(targetKey) {
  const data = descriptions[targetKey] ?? descriptions.rokujido;
  titleEl.textContent = data.title;
  textEl.textContent = data.text;

  hotspots.forEach((hotspot) => {
    hotspot.classList.toggle('is-selected', hotspot.dataset.target === targetKey);
  });
}

function setMode(mode) {
  body.dataset.mode = mode;
  modeLabel.textContent = modeLabels[mode] ?? modeLabels.overview;

  modeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });

  selectTarget(modeDefaultTarget[mode] ?? 'rokujido');
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

hotspots.forEach((hotspot) => {
  const choose = () => selectTarget(hotspot.dataset.target);
  hotspot.addEventListener('click', choose);
  hotspot.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      choose();
    }
  });
});

rotateRange.addEventListener('input', (event) => {
  const degree = Number(event.target.value);
  rotationValue.textContent = `${degree}°`;
  templeMap.style.transform = `rotate(${degree}deg) scale(1.01)`;
});

setMode('overview');
