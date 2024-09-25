function mcd(a, b, multi, num){
    if(a > num && b > num){
        if(a % num === 0 && b % num ===0){
            a = a/num
            b = b/ num
            multi = multi * num
            num = 2
        }else{
            num = num + 1
        }
        mcd(a, b, multi, num);
    }else {
        console.log('el resultad es', a,'-',b,'|',multi);
    }
}

mcd(50,70,1,2)