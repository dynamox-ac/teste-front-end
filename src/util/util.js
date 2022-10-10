export const maskMoney = (value) => {
    var v = value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return v
}

export const formatDate = (date) => {
    if (date.includes("/")) {
        let arr = date.split("/")
        return (arr[2] + "-" + arr[1] + "-" + arr[0])

    } else {
        let arr = date.split("-")
        return (arr[2] + "/" + arr[1] + "/" + arr[0])
    }
}