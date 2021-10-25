function setup() {
const canvas = document.getElementById('falling-snow-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

    return{
        canvas,
        canvasContext: canvas.getContext('2d'),
        numberOFSnowBalls:250
    }
}
function random(min,max) {
    return Math.floor(Math.random() * (max-min+1))+min;

}
function createSnowBalls(canvas, numberOFSnowBalls){
    return [...Array(numberOFSnowBalls)].map(() => {
        return{
            x:random(0, canvas.width),
            y:random(0, canvas.height),
            opacity:random(0.5,1),
            radius: random(2,4),
            speedx:random(-5,5),
            speedy:random(1,3)
        }
    });
}
function drawSonwBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2 );
    canvasContext.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;
    canvasContext.fill();

}
function MoveSnowBall(canvas,snowBall) {
    snowBall.x += snowBall.speedx;
    snowBall.y += snowBall.speedy;

    if (snowBall.x > canvas.width) {
        snowBall.x = 0;
    }else if (snowBall.x < 0){
        snowBall.x = canvas.width;
    }

    if (snowBall.y > canvas.height){
        snowBall.y = 0;
    }
       
}
function run() {
    
    const {canvas,canvasContext,numberOFSnowBalls} = setup();
    const snowBalls =createSnowBalls(canvas,numberOFSnowBalls);
    
    setInterval(()=>{
        canvasContext.clearRect(0,0, canvas.width,canvas.height);
        snowBalls.forEach((snowBall) => drawSonwBall(canvasContext, snowBall));
        snowBalls.forEach((snowBall) => MoveSnowBall(canvas,snowBall));
    },50);
}
run();