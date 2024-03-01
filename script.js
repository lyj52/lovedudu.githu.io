document.addEventListener('DOMContentLoaded', function() {
  // 获取表单元素
  var form = document.querySelector('form');

  // 为表单添加提交事件监听器
  form.addEventListener('submit', function(event) {
    // 阻止表单默认的提交行为
    event.preventDefault();

    // 获取表单输入的值
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var resume = document.querySelector('#resume').files[0];
    var coverLetter = document.querySelector('#cover-letter').value;

    // 显示提交成功的提示消息
    alert('申请已提交！\n姓名: ' + name + '\n电子邮件: ' + email + '\n留言: ' + coverLetter);

    // 可选：将表单数据发送到服务器（这里仅显示消息，未实际发送数据）
    // 您可以使用Ajax或其他方法将数据发送到服务器进行处理

    // 清空表单输入字段（可选）
    form.reset();
  });
});