// Util.js

const mapDataSet = (key, value) => {
    //배열 2개를 매개변수로 받아 첫번째 매개변수를 key로 두번째 매개변수롤 value로 만들기
    let resultMap = {};
    key.forEach((key, index) => {
        resultMap[key] = parseInt(value[index]);
    });
    return resultMap;
};

module.exports = { mapDataSet };
