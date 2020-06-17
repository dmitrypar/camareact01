
export const required = value => {
if(value) return undefined;
    return 'Field is required'
};

export  const maxLengthCreator = (maxLength) => (value) => {

       if(value.length > maxLength) return `no more ${maxLength} letters`;
       return undefined

};



/*export const maxLengthCreator =  (value) => {

    if(value.length > 10) return `no more 10 letters`;
    return undefined

};*/


