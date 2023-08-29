document.getElementById('applyForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const webhookUrl = 'https://discord.com/api/webhooks/1145742776252768358/bVPYloTlw2_FSDTQDurIkKSpBzhyA9zE_jCIoLpFTDKfh_3vRIYkFe4_XCGcZw2q4i8g'; // here webhook url link

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
        { name: 'كم سنه خبره', value: formData.get('whatyouwilldo') },
        { name: 'اسم حسابه', value: formData.get('user') },
        { name: 'المجال', value: formData.get('thing') }
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