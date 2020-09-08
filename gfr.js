/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response.
 *
 */

const $ = new jdl()
const live = "alipay://platformapi/startapp?appId=20000042&publicId=2017011104987367"

$.notify("支付宝果粉日", "", "领红包啦🧧", live)

$done()

function jdl() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, {"open-url" : url})
    }
}
