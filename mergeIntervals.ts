function merge(intervals: number[][]): number[][] {
    intervals.sort( ( a, b ) => a[ 0 ] - b[ 0 ] );
    const result = [ intervals[0] ];
    for( let i=1; i<intervals.length; i++ ) {
        let [ currentStart, currentEnd ] = intervals[i];
        let [ prevStart, prevEnd ] = result[result.length-1];

        if( prevEnd >= currentStart ) {
            result[result.length-1][0] = Math.min( prevStart, currentStart );
            result[result.length-1][1] = Math.max( prevEnd, currentEnd );
        }
        else {
            result.push( intervals[i] );
        }
    }
    return result;
  };
