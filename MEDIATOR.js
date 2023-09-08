document.getElementById('applyForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const webhookUrl = 'https://discord.com/api/webhooks/1146032672603394048/MBALuHqeVOaZzacacJaut0F-QaqaZIpV36zWTGQQN5Rh8jYOVIK9vZbgopzkgSWq2iS3'; // here webhook url link

  const apply = {
    content: '**هناك تقديم جديد:**',
    embeds: [{
      title: ':point_down: التقديم  ',
      color: 0x3498db,
      fields: [
        { name: 'الاسم', value: formData.get('name') },
        { name: 'العمر', value: formData.get('age') },
        { name: 'الخبرات', value: formData.get('experience') },
        { name: 'البلد', value: formData.get('city') },
        { name: 'الايميل', value: formData.get('email') },
        { name: 'بماذا سيفيدنا', value: formData.get('whatyouwilldo') },
        { name: 'اسم حسابه', value: formData.get('user') },
        { name: 'هل كان وسيط سابقا', value: formData.get('ishemed') },
        { name: 'هل لديه دلايل ثقة', value: formData.get('proff') }
      ]
    }]
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(apply)
  });

  alert('تم ارسال اختبارك');
});