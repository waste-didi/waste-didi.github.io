(function () {
  var form = document.getElementById('access-request-form');
  if (!form) return;
  var busy = false;
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (busy || !form.reportValidity()) return;
    var button = form.querySelector('button[type="submit"]');
    var status = document.getElementById('request-status');
    busy = true; button.disabled = true; button.textContent = '正在提交…'; status.hidden = true;
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 20000);
    try {
      var response = await fetch('https://filament-access-ddd.dandandandandu.chatgpt.site/api/requests', {
        method: 'POST', credentials: 'omit', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({
          name: document.getElementById('request-name').value.trim(),
          email: document.getElementById('request-email').value.trim(),
          website: document.getElementById('request-website').value
        })
      });
      var result = await response.json();
      if (!response.ok) throw new Error(result.error || '暂时没能提交，请重试。');
      form.hidden = true; status.className = 'request-success';
      status.textContent = '申请已提交！网站主人现在可以查看你的申请。无需发送邮件；获批后，用填写的 ChatGPT 邮箱登录库存网站。';
    } catch (error) {
      status.className = 'request-error';
      status.textContent = error.name === 'AbortError' ? '网络超时，请重试。重复提交不会生成重复申请。' : (error instanceof TypeError ? '网络暂时无法连接，请稍后重试。' : error.message);
    } finally {
      clearTimeout(timer); busy = false; button.disabled = false; button.textContent = '提交申请'; status.hidden = false;
    }
  });
})();
