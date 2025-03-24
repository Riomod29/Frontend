for (i = 100; i < 1000; i++) {
    const a = Math.floor(i/100);
    const b = Math.floor((i/10) % 10);
    const c = (i % 10);
    const d = Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3);

    if(i === d){
        console.log(`${i} là một số Armstrong`);
    }
}