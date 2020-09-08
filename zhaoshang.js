/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response.
 *
 */

const $ = new jdl()
const live = "cmbmobilebank://cmbls/functionjump?action=gofuncid&funcid=16335001&needlogin=flase&cmb_app_trans_parms_start=here&ActGroupID=AGP20200816170033YzcqI9Qz&behavior_entryid=YYD002001&appflag=0&shorturl=https%3a%2f%2ft.cmbchina.com%2fAfANJ3%3fActGroupID%3dAGP20200816170033YzcqI9Qz%26behavior_entryid%3dYYD002001"

$.notify("招商银行", "", "领红包啦🧧", live)

$done()

function jdl() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, {"open-url" : url})
    }
}
