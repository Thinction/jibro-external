const nameFiltering = (str) => {
    const nameArray = str.split('')
    nameArray[1] = ('○');
    return nameArray.join('');
  };

  export default nameFiltering;