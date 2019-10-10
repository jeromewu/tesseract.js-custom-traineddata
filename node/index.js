const { createWorker, PSM } = require('tesseract.js');

const worker = createWorker({
  langPath: '..',
  gzip: false,
  logger: m => console.log(m)
});

(async () => {
  await worker.load();
  await worker.loadLanguage('LCDDot_FT_500');
  await worker.initialize('LCDDot_FT_500');
  const { data: { text } } = await worker.recognize('../lcddot.png');
  console.log(text);
  await worker.terminate();
})();
