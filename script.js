// サンプル: スクロールでドットを上下に揺らす
gsap.utils.toArray('.dot').forEach(dot => {
  gsap.to(dot, {
    y: () => gsap.utils.random(-20, 20),
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: dot,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});