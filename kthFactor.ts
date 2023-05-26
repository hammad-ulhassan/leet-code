function kthFactor(n: number, k: number): number {
    function recurse( n: number, k: number, i: number, divCount: number ): number {
        if( n%i === 0 ) {
            divCount++;
            if( divCount === k ) {
                return i;
            }
        }
        if( i > n ) {
            return -1;
        }
        i++;
        return recurse(n,k,i, divCount);
    }
    let i=1;
    let divCount=0;
    return recurse( n, k, i, divCount );
};
