lastMs=500
lastCount=0
xms=175

function calcMs(last,now,xms){
    if(last<now)
    {
        if(last+xms>now)
            return 1
        else
            return 0
    }
    else{
        if(1000-last+now<xms)
            return 1
        else
            return 0
    }
}

function nclick(n,func)
{
    let time=new Date()
    let nowMs = time.getMilliseconds()
    let y = calcMs(lastMs,nowMs,xms)
    if(y){
        if(lastCount+1==n){
            func()
            lastMs=500
            lastCount=0
            return
        }
    }
    else{
        lastMs=500
        lastCount = 0
    }
    lastCount++
    lastMs=nowMs
}
/*
例如:

one=document.getElementById("one")
one.onclick=function(){
    nclick(3,function(){
        alert("nclick")
    })
}*/