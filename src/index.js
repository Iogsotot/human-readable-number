module.exports = function toReadable(number) {
    let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if ((number = number.toString()).length > 9) return 'overflow';
    n = ('000' + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    if (!n) return;
    let str = '';
    str = (n[1] == 0 && n[2] == 0) ? 'zero' : '';
    str += (n[1] != 0 && n[2] != 0) ? a[n[1][0]] + ' ' + 'hundred ' : '';
    str += (n[1] != 0 && n[2] == 0) ? a[n[1][0]] + ' ' + 'hundred' : '';
    str += (n[2] != 0 && n[2][1] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) : '';
    str += (n[2] != 0 && n[2][1] == 0) ? (a[Number(n[2])] || b[n[2][0]] + a[n[2][1]]) : '';
    return str;

}
