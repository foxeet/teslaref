

document.getElementById('copy-code').addEventListener('click', function() {
    navigator.clipboard.writeText('https://www.tesla.cn/referral/foxeet42049')
    .then(() => {
        // You can create a more styled toast message here instead of alert
        alert('邀请码复制成功！');
    })
    .catch(err => {
        alert('复制到剪贴板失败：' + err);
    });
});
