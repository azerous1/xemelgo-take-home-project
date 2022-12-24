
export function getFormattedTimeStamp() : string {
    return ""
}

export function insertKey(key: string, value: any, obj: any, idx: number) {

    if (idx === Object.keys(obj).length) {
        const copy = {...obj}
        copy[key] = value

        console.log('res: ', copy)
        return copy
    }

    const res = Object.keys(obj).reduce((ac: any, a, i) => {
        if(i === idx) ac[key] = value;
        ac[a] = obj[a]; 
        return ac;
    }, {})

    // console.log('res: ', res)
    return res
}
