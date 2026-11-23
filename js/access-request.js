(function () {
  var form = document.getElementById('access-request-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var name = document.getElementById('request-name').value.trim();
    var email = document.getElementById('request-email').value.trim();
    var body = '你好，我想申请「一卷 · 家里的耗材」的只读访问。\n\n称呼：' + (name || '未填写') + '\nChatGPT 登录邮箱：' + email + '\n\n我只需查看库存、耗材照片和作品，不需要编辑权限。\n入口：https://ddd.is-a.dev/hidden-entries/';
    document.getElementById('request-email-text').value = body;
    document.getElementById('request-email-fallback').hidden = false;
    window.location.href = 'mailto:0x000ddd@gmail.com?subject=' + encodeURIComponent('申请「一卷」只读访问') + '&body=' + encodeURIComponent(body);
  });
})();
