function minimumTotal(triangle: number[][]): number {
   let cascadeArray = new Array<number>( triangle.length + 1 ).fill( 0 );
    let lvl = triangle.length-1; // bottom-top approach
    for( lvl; lvl>=0; lvl-- ) {
        for( let i = 0; i < triangle[lvl].length; i++ ) {
            cascadeArray[i]=triangle[lvl][i] + Math.min(cascadeArray[i], cascadeArray[i+1]);
        }
    }
    return cascadeArray[0];
};
