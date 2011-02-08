var BL={};//Baseline namespace
BL.Rule=function(){
    this.canvas=document.createElement('canvas');
    this.docWidth=document.body.offsetWidth;
    this.docHeight=document.body.offsetHeight;
    this.lineHeight=arguments[0].lineHeight;
    //Declaration initializes and draws
    this.init();
    this.draw();
};
BL.Rule.prototype={
    init:function(){
        this.canvas.setAttribute('width',this.docWidth);
        this.canvas.setAttribute('height',this.docHeight);
        this.canvas.setAttribute('id','baselineCanvas');
        this.canvas.setAttribute('style','position:absolute;top:0;z-index:7000');
        document.body.appendChild(this.canvas);
    },
    draw:function(){
        var cnv=document.getElementById('baselineCanvas'),
        ctx=cnv.getContext('2d'),
        lineHeight=this.lineHeight;
        for(i=0;i<=this.docHeight;i+=lineHeight){
            ctx.strokeStyle='#ddd';
            ctx.beginPath();
            ctx.moveTo(0,(i+lineHeight)-0.5);
            ctx.lineTo(this.docWidth,(i+lineHeight)-0.5);
            ctx.stroke();
        };
    }
};

(function(){
    var bodyClass=document.body.className,
        /*regex by http://txt2re.com/*/
        re1='.*?',//Non-greedy match on filler
        re2='(baseline-)',//Word 1
        re3='(\\d)',// Any Single Digit 1
        re4='(\\d)',// Any Single Digit 2
        p=new RegExp(re1+re2+re3+re4,["i"]),
        m=p.exec(bodyClass);
    if(m!=null){
        var match=m[1]+m[2]+m[3];
        new BL.Rule({lineHeight:+(m[2]+m[3])});
    }
}());
