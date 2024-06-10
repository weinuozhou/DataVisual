document.addEventListener('DOMContentLoaded', function () {
    const targets = {
        sale: 31568061,
        profit: 1871971,
        like: 9136594,
        rate: 527549
    };

    // 定义增加数字的时间间隔和步长
    const duration = 4000; // 动画持续时间，毫秒
    const frameDuration = 4000 / 60; // 每帧的时间
    const totalFrames = Math.round(duration / frameDuration);

    Object.keys(targets).forEach(id => {
        const element = document.getElementById(id);
        const targetValue = targets[id];
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentValue = Math.round(targetValue * progress);

            element.textContent = currentValue;

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    });
});
