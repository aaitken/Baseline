var BL={};//Baseline namespace
BL.Rule=function(){
    this.canvas=document.createElement('canvas');
    this.docWidth=document.body.offsetWidth;
    this.docHeight=document.body.offsetHeight;
    this.lineHeight=null;//set with init
    //Declaration initializes and draws
    this.init();
};
BL.Rule.prototype={
    init:function(){
        var bodyClass=document.body.className,
            //regex by http://txt2re.com/
            re1='.*?',//Non-greedy match on filler
            re2='(baseline-)',//Word 1
            re3='(\\d)',// Any Single Digit 1
            re4='(\\d)',// Any Single Digit 2
            p=new RegExp(re1+re2+re3+re4,["i"]),
            m=p.exec(bodyClass);
        if(m!=null){
            var match=m[1]+m[2]+m[3];
            this.lineHeight=+(m[2]+m[3]);
            this.canvas.setAttribute('width',this.docWidth);
            this.canvas.setAttribute('height',this.docHeight);
            this.canvas.setAttribute('id','baselineCanvas');
            this.canvas.setAttribute('style','position:absolute;top:0;z-index:7000;visibility:visible');
            document.body.appendChild(this.canvas);
            this.draw();
        }
    },
    draw:function(){
        var cnv=document.getElementById('baselineCanvas'),
            ctx=cnv.getContext('2d'),
            btn=document.createElement('button'),
            lineHeight=this.lineHeight,
            that=this;
        for(i=0;i<=this.docHeight;i+=lineHeight){
            ctx.strokeStyle='#ddd';
            ctx.beginPath();
            ctx.moveTo(0,(i+lineHeight)-0.5);
            ctx.lineTo(this.docWidth,(i+lineHeight)-0.5);
            ctx.stroke();
        };
        btn.innerHTML='Toggle Line Rules';
        btn.setAttribute('style','position:absolute;z-index:8000;font-size:12px;top:10px;left:10px');
        btn.addEventListener('click',function(){
            (function(){
                this.canvas.style.visibility==='visible'?
                    this.canvas.style.visibility='hidden':
                    this.canvas.style.visibility='visible';
            }.apply(that));
        });
        document.body.appendChild(btn);
    }
};
new BL.Rule();