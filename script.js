const time = Date.now() * 0.001;  // ゆっくり変動させる

if (dist < maxDistance) {
  const opacity = 1 - dist / maxDistance;

  // 擬似ノイズ的な揺れ（sin, cosの組み合わせ）
  const offsetX = (Math.sin(time + i) + Math.cos(time + j)) * 15;
  const offsetY = (Math.cos(time * 0.5 + i * j) + Math.sin(time * 0.3 + j)) * 15;
  const midX = (dots[i].x + dots[j].x) / 2 + offsetX;
  const midY = (dots[i].y + dots[j].y) / 2 + offsetY;

  ctx.beginPath();
  ctx.moveTo(dots[i].x, dots[i].y);
  ctx.quadraticCurveTo(midX, midY, dots[j].x, dots[j].y);
  ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
  ctx.lineWidth = 0.01;
  ctx.stroke();
}

function createDot() {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 2,
    life: Math.random() * 3000 + 1000,
    born: Date.now(),
    maxDistance: Math.random() * 500 + 400  // 400〜900の範囲でランダム
  };
}
const effectiveDistance = Math.min(dots[i].maxDistance, dots[j].maxDistance);

if (dist < effectiveDistance) {
  const opacity = 1 - dist / effectiveDistance;
  
  ctx.beginPath();
  ctx.moveTo(dots[i].x, dots[i].y);
  ctx.quadraticCurveTo(midX, midY, dots[j].x, dots[j].y);
  ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
  ctx.lineWidth = 0.2;
  ctx.stroke();
}
